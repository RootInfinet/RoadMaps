const prisma = require('../prisma');
const { getClient } = require('../redisClient');

const leaderboardController = async (req, res) => {
    const client = await getClient();
    try {
        const cachkey = 'leaderboard_data';
        const cachedData = await client.get(cachkey);
        if (cachedData) {
            console.log("Serving leaderboard data from Redis Cache 🚀");
            return res.status(200).json(JSON.parse(cachedData));
        }
        const leaderboardData = await prisma.user.findMany({
            select: {
                id: true,
                score: true,
                name: true,
                email: true,
            },
            orderBy: {
                score: 'desc',
            },
        });
        await client.setEx(cachkey, 300, JSON.stringify(leaderboardData));
        res.status(200).json(leaderboardData);
    } catch (error) {
        console.error("Error fetching leaderboard data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    leaderboardController,
};