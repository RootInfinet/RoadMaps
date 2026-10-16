const { RedisMemoryServer } = require('redis-memory-server');
const redis = require('redis');

let redisClient = null;
let redisServer = null;

async function getClient() {
  if (redisClient && redisClient.isOpen) {
    return redisClient;
  }

  try {
    if (!redisServer) {
      redisServer = await RedisMemoryServer.create();
      const host = await redisServer.getHost();
      const port = await redisServer.getPort();

      redisClient = redis.createClient({
        url: `redis://${host}:${port}`
      });

      redisClient.on('error', (err) => {
        console.error('❌ Redis Client Error:', err.message);
      });

      await redisClient.connect();
      console.log(`🚀 Redis Memory Server is running successfully at redis://${host}:${port}`);
    } else if (redisClient && !redisClient.isOpen) {
      await redisClient.connect();
    }

    return redisClient;
  } catch (error) {
    console.error("Failed to start Redis Memory Server:", error);
    redisServer = null;
    redisClient = null;
    throw error;
  }
}
  

module.exports = {
  getClient,
};