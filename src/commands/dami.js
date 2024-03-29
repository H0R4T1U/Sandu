const { SlashCommandBuilder } = require('@discordjs/builders');
const {getVoiceConnection,createAudioResource,createAudioPlayer,AudioPlayerStatus,joinVoiceChannel} = require('@discordjs/voice');
const ytdl = require("discord-ytdl-core");
const { YToken } = require('../config.json');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(YToken);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dami')
		.setDescription('Iti dau!')
		.addStringOption(option => option.setName("pesa").setDescription("Numele pesei/Playlist").setRequired(true)),
	playlist:[],
	player: new createAudioPlayer(),
	i:0,//static foloseste
	async execute(interaction) {
		const piesa = interaction.options.getString("pesa");
		let connection = getVoiceConnection(interaction.guildId);
		if(!connection){ //checks if there is a connection and if not, creates one.
			const channel = interaction.member.voice.channel;
			connection = joinVoiceChannel({
				channelId: channel.id,
				guildId: channel.guild.id,
				adapterCreator: channel.guild.voiceAdapterCreator,
			});
		}
		let stream;

		
		
		if(piesa.includes('playlist')){
			await youtube.getPlaylist(piesa).then(async results=>{ //Gets the song from youtube and adds it to the playlsit

				if(results){
					const songs = await results.getVideos()
						
						for(const i in songs){
							this.playlist.push(songs[i]);
						}
					
					/*
					let i=0
					let result = results[i];
					while(result){
						this.playlist.push(result);
						result=results[++i];
						*/
				}else{
					interaction.reply("Couldn't find shit!")
					return;
				}
				
			})
	
		}else{
			await youtube.search(piesa).then(results=>{ //Gets the song from youtube and adds it to the playlsit

				if(results){
					this.playlist.push(results[0]);
				}else{
					interaction.reply("Couldn't find shit!")
					return;
				}
				
			})
		}
		

		if(!(this.player.state.status == "playing" || this.player.state.status == "buffering")){ //checks if player is currently playing a song

			stream = await ytdl(this.playlist[this.i++].url, {
				filter: "audioonly",
				opusEncoded: false,
				fmt: "mp3",
				encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']
			});

			const resource = createAudioResource(stream,{ inlineVolume:true });
			resource.volume.setVolume(0.5);

			this.player.play(resource);
			connection.subscribe(this.player);
			
			this.player.on(AudioPlayerStatus.Idle,async ()=>{ //this piece of code executes when the currently playing song finishes.
				if(this.playlist[this.i] != null ){

				
					stream = await ytdl(this.playlist[this.i++].url, {
						filter: "audioonly",
						opusEncoded: false,
						fmt: "mp3",
						encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']
					});
					
		
					const resource = createAudioResource(stream,{ inlineVolume:true });
					resource.volume.setVolume(0.5);
		
					this.player.play(resource);
				}
			})
			
			await interaction.reply("Stai ca o indoi amu coae");

		}else{
			
			await interaction.reply("Am adaugat pesa la playlist frate!");
			
		}
	},
};
