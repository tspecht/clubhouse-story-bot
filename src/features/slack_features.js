import Clubhouse from "clubhouse-lib";

const clubhouseClient = Clubhouse.create(process.env.CLUBHOUSE_TOKEN);

export const handleMessage = async (bot, message) => {
    await bot.say({type: "typing"});
    const storyData = await clubhouseClient.createStory({
        name: message.incoming_message.text, 
        description: message.incoming_message.text,
        story_type: "bug",
        project_id: process.env.CLUBHOUSE_PROJECT_ID
    });

    const replyMessage = {}
    replyMessage.text = `Got it! I created a ticket for you here: ${storyData.app_url}`;
    replyMessage.channel = message.channel;
    replyMessage.response_type = 'in_channel';
    replyMessage.unfurl_links = true;
    await bot.say(replyMessage);
}

export default (controller) => {
    controller.ready(async () => {
        console.log("I'm listening ...");
    });

    controller.on('slash_command,direct_message,direct_mention', async(bot, message) => {
        await handleMessage(bot, message);
    });
}