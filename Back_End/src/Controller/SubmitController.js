const submitProject = async (req, res) => {
const { name, email, roadmap_title, Project_One_Url, Project_Two_Url } = req.body;
  const user = req.user;

  if (!Project_One_Url || !Project_Two_Url) {
    return res.status(400).json({ message: "Both project links are required" });
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return res.status(503).json({
      message: "Email service not configured on server",
    });
  }

  const templateParams = {
    user_name: name,
    user_email: email,
    roadmap_title: roadmap_title,
    portfolio_5_phases_url: Project_One_Url,
    final_independent_url: Project_Two_Url,
  };

  try {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          accessToken: privateKey,
          template_params: templateParams,
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("EmailJS error:", errText);
      return res.status(502).json({ message: "Failed to send submission email" });
    }

    return res.status(200).json({ message: "Submission sent successfully" });
  } catch (error) {
    console.error("Submit error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { submitProject };
