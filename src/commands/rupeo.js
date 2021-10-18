const { SlashCommandBuilder } = require('@discordjs/builders');
const {getVoiceConnection,createAudioResource,createAudioPlayer,AudioPlayerStatus} = require('@discordjs/voice');
const {join} = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rupeo')
		.setDescription('Fute-un sandu ciorba'),
	async execute(interaction) {
        const connection = getVoiceConnection(interaction.guildId);
        
        const player = createAudioPlayer();
        const resource = await createAudioResource(join(__dirname,'../music/sandu.mp3'),{ inlineVolume:true });
        
        await interaction.reply('Stai ca o rup frate!\n')
        resource.volume.setVolume(0.5);
        player.play(resource);
        connection.subscribe(player);
        
        
		
	},
};
