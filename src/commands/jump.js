const { SlashCommandBuilder } = require('@discordjs/builders');
const {entersState,VoiceConnectionStatus,getVoiceConnection} = require('@discordjs/voice');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('jump')
		.setDescription('Sar la piesa aia!')
        .addStringOption(option => option.setName("pesa").setDescription("nr in queue al piesei").setRequired(true)),
	async execute(interaction) {
        const id = parseInt(interaction.options.getString("pesa"));
        const connection = getVoiceConnection(interaction.guildId);

        interaction.client.commands.get("dami").i = id;
        
        if(connection){
            interaction.client.commands.get("dami").player.stop();
            
            await interaction.reply("Se rezolva Şefu!");
        }else{
            await interaction.reply("Nu is conectat la voce frate!");
        }    
        
		
	},
};
