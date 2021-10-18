module.exports = {
	name: 'messageCreate',
	async execute(client,message) {
		if(!(message.content.startsWith("/dami"))) return;

        const command = client.commands.get(message.content.split("/dami")[0]);

	    try {
		    await command.execute(message);
	    } catch (error) {
		    console.error(error);
		    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	    }

	},
};
