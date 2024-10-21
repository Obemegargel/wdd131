// sorting.js
const hikes = [
    {
      name: "Bechler Falls",
      stub: "bechler_falls",
      imgSrc:
        "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      tags: ["Easy", "Yellowstone", "Waterfall"],
      description:
        "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
      trailhead: [44.14457, -110.99781]
    },
    {
      name: "Teton Canyon",
      stub: "teton_canyon",
      imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      tags: ["Easy", "Tetons"],
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
      trailhead: [43.75567, -110.91521]
    },
    {
      name: "Denanda Falls",
      stub: "denanda_falls",
      imgSrc:
        "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      tags: ["Moderate", "Yellowstone", "Waterfall"],
      description: "Beautiful hike through Bechler meadows to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
      trailhead: [44.14974, -111.04564]
    },
    {
      name: "Coffee Pot Rapids",
      stub: "coffee_pot",
      imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "2.2 miles",
      tags: ["Easy"],
      description:
        "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
      directions:
        "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
      trailhead: [44.49035, -111.36619]
    },
    {
      name: "Menan Butte",
      stub: "menan_butte",
      imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
      imgAlt: "Image of Menan Butte",
      distance: "3.4 miles",
      tags: ["Moderate", "View"],
      description:
        "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
      directions:
        "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
      trailhead: [43.78555, -111.98996]
    }
  ];
   const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

   // practice one
//    const numbers = [3,2,4,1];
//    const simpleSort = numbers.sort((a,b) => {
//     console.log(a,b);
//     return a - b;
//    });
//    console.log(simpleSort);


   // practice two
//    function compareFunction(a,b) {
//     if (a.toLowerCase() < b.toLowerCase()) {
//       return -1;
//     } else if (a.toLowerCase() > b.toLowerCase()) {
//       return 1;
//     }
//    // a must be equal to b
//    return 0;
//   }
//   const anotherSort = simpleList.sort(compareFunction)
  
  // practice three
//   function searchList(list, q){
//     function searchCallback(string){
//         return string.toLowerCase().includes(q.toLowerCase()) // this returns true or false
//     }
//     return list.filter(searchCallback)
//   }
//   console.log(searchList(simpleList, "an"));

  // practice four
//   function searchList(list, q){
//     function searchCallback(object_hike){
//         // object_hike.name // this is looking at the object's name value
//         // NOTE if object_hike which is an object variable name is not saved in the same location as the thing you compare then it wont say its the same
//         return object_hike.name.toLowerCase().includes(q.toLowerCase()) // this returns true or false
//     }
//     return list.filter(searchCallback)
//   }
//   console.log(searchList(hikes, "al"));

  // practice five
  function searchList(list, q){
    function searchCallback(object_hike){
        // object_hike.name // this is looking at the object's name value
        return ( object_hike.name.toLowerCase().includes(q.toLowerCase()) || 
                 object_hike.description.toLowerCase().includes(q.toLowerCase()) ||
                 object_hike.tags.find((tag)=> tag.toLowerCase().includes(q.toLowerCase())) )// returns a true or false //include only works for strings. Tags is an array, for each tag in the array we will call this "tag" which now is looking at a string then we can use includes on this one.
    }
    return list.filter(searchCallback)
  }
  console.log(searchList(hikes, "al"));
  console.log(searchList(hikes, "water"));