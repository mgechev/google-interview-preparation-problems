// https://leetcode.com/problems/meeting-rooms-ii/description/

const minMeetingRooms = intr => {
  if (!intr.length) return 0;
  let min = intr[0].start;
  for (let i = 1; i < intr.length; i += 1) {
    min = Math.min(intr[i].start, min);
  }
  const res = [];
  for (let i = 0; i < intr.length; i += 1) {
    const c = intr[i];
    for (let j = c.start; j < c.end; j += 1) {
      res[j - min] = (res[j - min] || 0) + 1;
    }
  }
  let max = 0;
  for (let i = 0; i < res.length; i += 1) {
    max = Math.max(max, res[i] || 0);
  }
  return max;
};

console.log(minMeetingRooms([{
  start: 7,
  end: 10
},{
  start: 2,
  end: 4
}]));

console.log(minMeetingRooms([{
  start: 0,
  end: 30
},{
  start: 5,
  end: 10
},{
  start: 15,
  end: 20
}]));

console.log(minMeetingRooms([{
  start: 5,
  end: 8
},{
  start: 6,
  end: 8
}]));

console.log(minMeetingRooms([{
  start: 8,
  end: 9
},{
  start: 8,
  end: 9
}]));

console.log(minMeetingRooms([{
  start: 13,
  end: 15
},{
  start: 1,
  end: 13
}]));

console.log(minMeetingRooms([{"start":710408,"end":717125},{"start":28307,"end":260069},{"start":568039,"end":812649},{"start":757417,"end":827878},{"start":282244,"end":372246},{"start":412056,"end":490958},{"start":447772,"end":602450},{"start":102536,"end":530625},{"start":148167,"end":443539},{"start":247284,"end":927993},{"start":635885,"end":892901},{"start":345360,"end":368338},{"start":280426,"end":511436},{"start":8388,"end":802331},{"start":193418,"end":975449},{"start":64229,"end":170263},{"start":63760,"end":851294},{"start":687024,"end":736332},{"start":903704,"end":993337},{"start":29665,"end":36338},{"start":742967,"end":858545},{"start":154770,"end":892431},{"start":449347,"end":997716},{"start":361344,"end":796049},{"start":369915,"end":690279},{"start":350957,"end":722321},{"start":541192,"end":844342},{"start":386882,"end":849041},{"start":353575,"end":827396},{"start":619269,"end":985657},{"start":456795,"end":590773},{"start":550649,"end":564169},{"start":123037,"end":409682},{"start":650420,"end":722589},{"start":115414,"end":608871},{"start":642472,"end":924244},{"start":3556,"end":486990},{"start":828861,"end":861281},{"start":187902,"end":346175},{"start":599704,"end":804697},{"start":835616,"end":930996},{"start":284785,"end":567464},{"start":35915,"end":502476},{"start":385138,"end":996151},{"start":169847,"end":489068},{"start":817307,"end":835656},{"start":21646,"end":991638},{"start":873638,"end":964715},{"start":156872,"end":445423},{"start":12381,"end":490269},{"start":218949,"end":843250},{"start":689575,"end":831883},{"start":318869,"end":802041},{"start":786949,"end":949986},{"start":103879,"end":533827},{"start":592110,"end":709376},{"start":29166,"end":265964},{"start":104741,"end":825182},{"start":156811,"end":243624},{"start":416764,"end":951348},{"start":536314,"end":947194},{"start":530400,"end":926069},{"start":529235,"end":960125},{"start":368354,"end":791934},{"start":564009,"end":880826},{"start":192069,"end":560981},{"start":15361,"end":710500},{"start":399237,"end":486210},{"start":701844,"end":851693},{"start":47777,"end":556179},{"start":237299,"end":369910},{"start":304481,"end":438198},{"start":632688,"end":834124},{"start":430580,"end":501438},{"start":78404,"end":178828},{"start":386092,"end":623302},{"start":97242,"end":653633},{"start":216381,"end":368923},{"start":189618,"end":498091},{"start":370730,"end":806554},{"start":641014,"end":796669},{"start":91755,"end":696635},{"start":184043,"end":402475},{"start":618663,"end":618988},{"start":857206,"end":945738},{"start":252682,"end":323608},{"start":191546,"end":759395},{"start":182770,"end":587217},{"start":615904,"end":822060},{"start":193049,"end":665741},{"start":680772,"end":803637},{"start":45971,"end":990881},{"start":335488,"end":479778},{"start":254342,"end":801184},{"start":599741,"end":908405},{"start":385346,"end":446768},{"start":291861,"end":343578},{"start":282799,"end":338730},{"start":439243,"end":545020},{"start":179001,"end":350300},{"start":698125,"end":749984},{"start":530101,"end":550939},{"start":279895,"end":950570},{"start":377519,"end":636135},{"start":529011,"end":813570},{"start":406594,"end":494663},{"start":354190,"end":982513},{"start":325964,"end":626450},{"start":308093,"end":662705},{"start":389553,"end":757494},{"start":579846,"end":751170},{"start":426121,"end":572945},{"start":798783,"end":939913},{"start":821737,"end":929615},{"start":262911,"end":813785},{"start":853101,"end":931437},{"start":102583,"end":939474},{"start":455251,"end":644849},{"start":481551,"end":723814},{"start":40000,"end":590265},{"start":314933,"end":409967},{"start":655972,"end":687237},{"start":511300,"end":594029},{"start":241741,"end":325813},{"start":603891,"end":999946},{"start":167239,"end":619450},{"start":202515,"end":454566},{"start":31211,"end":183461},{"start":379289,"end":601962},{"start":159582,"end":196678},{"start":98941,"end":815179},{"start":797080,"end":890229},{"start":511578,"end":777861},{"start":210613,"end":908049},{"start":678068,"end":968905},{"start":130873,"end":860096},{"start":262022,"end":451970},{"start":188604,"end":306834},{"start":8894,"end":444469},{"start":232371,"end":765836},{"start":16229,"end":242121},{"start":672214,"end":791046},{"start":91393,"end":798459},{"start":18244,"end":774076},{"start":378095,"end":595831},{"start":4774,"end":84395},{"start":512435,"end":736668},{"start":68342,"end":753433},{"start":121592,"end":148055},{"start":295256,"end":457211}]));

console.log(intersects({ start: 8, end: 9 }, { start: 8, end: 9 }));
console.log(intersects({ start: 13, end: 15 }, { start: 1, end: 13 }));