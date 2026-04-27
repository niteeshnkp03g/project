exports.handler = async (event) => {
    try {
        const { passcode } = JSON.parse(event.body);

        if (passcode === process.env.LOVE_PASSCODE) {
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: false })
        };

    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Server error" })
        };
    }
};