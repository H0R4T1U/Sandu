const { SlashCommandBuilder } = require('@discordjs/builders');
const {entersState,VoiceConnectionStatus,joinVoiceChannel} = require('@discordjs/voice');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hai')
		.setDescription('Coaie Vin!'),
	async execute(interaction) {
        const channel = interaction.member.voice.channel;
        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

        try{
            await entersState(connection,VoiceConnectionStatus.Ready,30e3);
            await interaction.reply(`Coae amu viu\n`);
            
        }catch(error){
            connection.destroy();
            console.log(`Couldn't connect to the voice channel!`);
            await interaction.reply(`Coae n-am putu veni!\n`);
        }
        
        
            
        
		
	},
};
