const { SlashCommandBuilder } = require('@discordjs/builders');;
const { MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('slagare')
		.setDescription('Şlagărele care urmează sa fie'),
	async execute(interaction) {
        let playlist = interaction.client.commands.get("dami").playlist;
        embeds = [];
        
        if (playlist.length >=1){
            for (let i=0;i<playlist.length;i++){
                let piesaEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(playlist[i].title)
                .setURL(playlist[i].url)
                .setThumbnail(playlist[i].thumbnails.default.url)
                embeds.push (piesaEmbed)
            }
            await interaction.reply({ embeds: [...embeds] });
        }else{
            await interaction.reply("N-ai piese frate!")
        }
    }
}