const { RedisMemoryServer } = require('redis-memory-server');
const redis = require('redis');

let redisClient = null;
let initPromise = null;

async function initRedis() {
    if (redisClient) return redisClient;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        const redisServer = await RedisMemoryServer.create();
        const host = typeof redisServer.getIp === 'function' ? await redisServer.getIp() : '127.0.0.1';
        const port = await redisServer.getPort();

        redisClient = redis.createClient({
            url: `redis://${host}:${port}`
        });

        redisClient.on('error', (err) => console.error('❌ Redis Client Error:', err));

        await redisClient.connect();
        console.log(`🚀 Redis Memory Server is running successfully at redis://${host}:${port}`);
        return redisClient;
    })();

    return initPromise;
}

initRedis();

module.exports = {
    initRedis,
    getClient: async () => {
        if (!redisClient) {
            await initRedis();
        }
        return redisClient;
    }
};