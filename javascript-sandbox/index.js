//forEach
Array.prototype.forEach = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
  return this;
};

//map
Array.prototype.map = function(projectionFunc) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(projectionFunc(this[i]));
  }
  return newArr;
};

//filter

Array.prototype.filter = function(predicateFunction) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (predicateFunction(this[i])) newArr.push(this[i]);
  }
  return newArr;
};

//concatAll
// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array

Array.prototype.filter = function() {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    //check if this is array if it is loop throught it and add the elements to the array
    // if (this[i]) {
    //   for (let j = 0; j < this.length; j++) {}
    // }
  }
};








function hello() {
	var lists = [
			{
				"id": 5434364,
				"name": "New Releases"
			},
			{
				"id": 65456475,
				name: "Thrillers"
			}
		],
		videos = [
			{
				"listId": 5434364,
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"listId": 5434364,
				"id": 675465,
				"title": "Fracture"
			},
			{
				"listId": 65456475,
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"listId": 65456475,
				"id": 654356453,
				"title": "Bad Boys"
			}
		],
		boxarts = [
			{ videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
			{ videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
			{ videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
			{ videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
			{ videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
			{ videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
			{ videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
		],
		bookmarks = [
			{ videoId: 65432445, time: 32432 },
			{ videoId: 675465, time: 3534543 },
			{ videoId: 70111470, time: 645243 },
			{ videoId: 654356453, time: 984934 }
		];

  return lists.map(list => ({
  	name: list.name,
    videos: videos.filter(video => video.listId === list.id).
    	map(video =>
        Array.zip(
          bookmarks.filter(bookmark => bookmark.videoId == video.id).map(bookmark => bookmark.time),
          boxarts.filter(boxart => boxart.videoId == video.id).
               reduce((boxart, curr) => boxart.width * boxart.height < curr.width * curr.height ?
                       boxart: curr).map(boxart => boxart.url),
          (time, boxart) => {
            return ({
               id: video.id,
               title: video.title,
               time: time,
           		 boxart: boxart
            })
          }))
   }))

}
