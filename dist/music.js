const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    volume: 0.3,
    loop: 'all',
    audio: [
      {
		name: '笑笑生',
        artist: '茶理理理子&汐音社',
        url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_82261159&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'uploads/Avem.jpg',
      },
      {
        name: 'Avem(The Aviation Theme)',
        artist: 'Alan Walker',
        url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_80594447&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'uploads/Avem.jpg',
      },
      {
        name: "PLANET",
        artist: 'ラムジ',
        url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_2127977&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'uploads/planet.jpg',
      },
      {
        name: '冬空',
        artist: '三代目 J Soul Brothers',
        url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_82342478&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'uploads/Avem.jpg',
      }
    ]
});