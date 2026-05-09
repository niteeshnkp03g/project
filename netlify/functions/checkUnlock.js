exports.handler = async () => {

    const unlockDate = new Date(process.env.UNLOCK_DATE);
    const now = new Date();

    return {
        statusCode: 200,
        body: JSON.stringify({
            unlocked: now >= unlockDate
        })
    };
};