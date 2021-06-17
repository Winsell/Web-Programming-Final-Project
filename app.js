const api = {
  key: "f49ef4ab47bd8c5b46316c7f6d6bdccc",
  base: "https://api.openweathermap.org/data/2.5/",
};

//searchbox listener
const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(e) {
  // enter key code: 13
  if (e.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then((weather) => {
      console.log(weather);
      return weather.json();
    })
    .then(displayResults);
}
// country and city info from api (sys is country)
function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  //current date
  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);
  //current temp
  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_el = document.querySelector(".current .weather .weather_text");
  weather_el.innerText = weather.weather[0].main;

  //description in weather from api and weatherText returns a function
  let weather_description = document.querySelector(".weather_description");
  weather_description.innerText = weatherText(weather.weather[0].description);
  //min-max temp. 
  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max
  )}°C`;
}

function weatherText(weather_status) {
  let icon = document.querySelector(".weather_icon");
  let text;
  switch (weather_status) {
    case "clear sky":
      text =
        "If Mother Nature decides to bless you, you will wake up in a warm and sunny morning. However, even in these ideal situations, you still need to be prepared for safety. Although sunny days do not have the number of dangers associated with severe weather, certain safety factors should still be considered. If necessary, prepare the participants to cool down in a sheltered place. It is always recommended to use sunscreen and monitor the time of reapplication, especially if event participants are drinking, sweating, or participating in water sports. Sunglasses with UV protection can help prevent photokeratitis, which is essentially sunburn caused by excessive exposure to UV rays. If the weather is dry and there is a lot of movement on the soft soil or sand, the particles will be kicked up. This situation is most likely to occur during games, sporting events, and concerts.Dehydration is a common problem on sunny days, but hyponatremia (also called excessive dehydration) can also occur. A common belief is that water should be consumed continuously during warm days. However, you only need to drink water when you are thirsty.";
      document.body.style.backgroundImage =
        "url('img/backgrounds/clear_sky.jpg')";
      icon.src = "img/icons/clear_sky.png";
      break;
    case "few clouds":
      text =
        "If Mother Nature decides to bless you, you will wake up in a warm and sunny morning. However, even in these ideal situations, you still need to be prepared for safety. Although sunny days do not have the number of dangers associated with severe weather, certain safety factors should still be considered. If necessary, prepare the participants to cool down in a sheltered place. It is always recommended to use sunscreen and monitor the time of reapplication, especially if event participants are drinking, sweating, or participating in water sports. Sunglasses with UV protection can help prevent photokeratitis, which is essentially sunburn caused by excessive exposure to UV rays. If the weather is dry and there is a lot of movement on the soft soil or sand, the particles will be kicked up. This situation is most likely to occur during games, sporting events, and concerts.Dehydration is a common problem on sunny days, but hyponatremia (also called excessive dehydration) can also occur. A common belief is that water should be consumed continuously during warm days. However, you only need to drink water when you are thirsty.";
      document.body.style.backgroundImage =
        "url('img/backgrounds/few_clouds.jpg')";
      icon.src = "img/icons/few_clouds.png";
      break;
    case "scattered clouds":
      text =
        "Darkish clouds mute and unfold the solar’s light, softening shadows which calms us. This allows us to absorb greater than whilst the sun shines brightly, satirically hiding so much in shadows. You can revel in those effects anywhere life is considerable, from dense mountain forests to open grasslands, to planted fields. Considering clouds block sunlight, they do have an effect on the system in both plants growing at the land and aquatic flora. Photosynthesis is also confined whilst sunlight hours are fewer in winter. The photosynthesis of aquatic plant life can also be constrained by using substances inside the water. Suspended debris of clay, silt or loose-floating algae can make it tough for plant life to make the sugar they need to grow. The rate of transpiration and water loss adjustments relying at the temperature of the air, humidity, wind, and the quantity of leaf floor region. While the weather is warm and sunny, a plant can lose a incredible quantity of water and suffer for it. On a fab, cloudy day, the plant might also transpire much less however preserve masses of water so it is right for flowers that climate be cloudy.";
      document.body.style.backgroundImage =
        "url('img/backgrounds/few_clouds.jpg')";
      icon.src = "img/icons/scattered_clouds.png";
      break;
    case "broken clouds":
      text =
        "Darkish clouds mute and unfold the solar’s light, softening shadows which calms us. This allows us to absorb greater than whilst the sun shines brightly, satirically hiding so much in shadows. You can revel in those effects anywhere life is considerable, from dense mountain forests to open grasslands, to planted fields. Considering clouds block sunlight, they do have an effect on the system in both plants growing at the land and aquatic flora. Photosynthesis is also confined whilst sunlight hours are fewer in winter. The photosynthesis of aquatic plant life can also be constrained by using substances inside the water. Suspended debris of clay, silt or loose-floating algae can make it tough for plant life to make the sugar they need to grow. The rate of transpiration and water loss adjustments relying at the temperature of the air, humidity, wind, and the quantity of leaf floor region. While the weather is warm and sunny, a plant can lose a incredible quantity of water and suffer for it. On a fab, cloudy day, the plant might also transpire much less however preserve masses of water so it is right for flowers that climate be cloudy.";
      document.body.style.backgroundImage =
        "url('img/backgrounds/few_clouds.jpg')";
      icon.src = "img/icons/broken_clouds.png";
      break;
    case "heavy intensity rain":
      text =
        " Gone are the days when the only type of raincoat we know is a plastic poncho that you can buy at a convenience store. Although they work most of the time, there are of course other options. Raincoats also appear in the form of foldable raincoats and belt-style windbreakers, which are both useful and fashionable. If possible, find a helmet with a larger hood to protect your head, so that you can still wear clothes underneath to increase warmth.Although it is really tempting to wear slippers in this weather, please don't do it. In case you slip on the road from time to time, these protective devices and grip are almost non-existent. You don’t need to wear those heavy rain boots, especially in towns. Instead, invest in leather boots, rubber and vinyl shoes or any other pair of waterproof shoes you own at home. Whether you’re occurring a brief trekking trip or simply a tour of the city, packing quick-dry wear cherish shirts and tights could be a must.Power going out throughout the season isn’t something new, particularly in less developed countries. If you’re petrified of the dark or just wish to feel additional safe once navigating the streets or your room, having a strong torch or light source is necessary.";
      document.body.style.backgroundImage =
        "url('img/backgrounds/shower_rain.jpg')";
      icon.src = "img/icons/shower_rain.png";
      break;
    case "moderate rain":
      text =
        " Gone are the days when the only type of raincoat we know is a plastic poncho that you can buy at a convenience store. Although they work most of the time, there are of course other options. Raincoats also appear in the form of foldable raincoats and belt-style windbreakers, which are both useful and fashionable. If possible, find a helmet with a larger hood to protect your head, so that you can still wear clothes underneath to increase warmth.Although it is really tempting to wear slippers in this weather, please don't do it. In case you slip on the road from time to time, these protective devices and grip are almost non-existent. You don’t need to wear those heavy rain boots, especially in towns. Instead, invest in leather boots, rubber and vinyl shoes or any other pair of waterproof shoes you own at home. Whether you’re occurring a brief trekking trip or simply a tour of the city, packing quick-dry wear cherish shirts and tights could be a must.Power going out throughout the season isn’t something new, particularly in less developed countries. If you’re petrified of the dark or just wish to feel additional safe once navigating the streets or your room, having a strong torch or light source is necessary.";
      document.body.style.backgroundImage =
        "url('img/backgrounds/shower_rain.jpg')";
      icon.src = "img/icons/shower_rain.png";
      break;
    case "light rain":
      text =
        "Gone are the days when the only type of raincoat we know is a plastic poncho that you can buy at a convenience store. Although they work most of the time, there are of course other options. Raincoats also appear in the form of foldable raincoats and belt-style windbreakers, which are both useful and fashionable. If possible, find a helmet with a larger hood to protect your head, so that you can still wear clothes underneath to increase warmth.Although it is really tempting to wear slippers in this weather, please don't do it. In case you slip on the road from time to time, these protective devices and grip are almost non-existent. You don’t need to wear those heavy rain boots, especially in towns. Instead, invest in leather boots, rubber and vinyl shoes or any other pair of waterproof shoes you own at home. Whether you’re occurring a brief trekking trip or simply a tour of the city, packing quick-dry wear cherish shirts and tights could be a must.Power going out throughout the season isn’t something new, particularly in less developed countries.";
      document.body.style.backgroundImage = "url('img/backgrounds/rain.jpg')";
      icon.src = "img/icons/rain.png";
      break;
    case "Thunderstorm":
      text =
        "Regular pruning of trees will help reduce the branches that fall during high winds or other bad weather. For particularly tall trees, experts can trim them for you and tell you when the trees are likely to be blown down in a storm in order to remove them. Loose items such as grills, picnic tables, and lawn furniture should be brought indoors to avoid becoming projectiles in windy storms. Decorations, even if they are firmly fixed to the house, can cause damage or be destroyed in a storm. The drainage ditch should be cleaned after the leaves fall, but there may be other drainage problems around your home, including the following areas where water can flow to the foundation and damage it. Landscaping professionals can help you identify problems and find solutions so that you will not encounter any problems when the storm comes.";
      document.body.style.backgroundImage =
        "url('img/backgrounds/thunderstorm.jpg')";
      icon.src = "img/icons/thunderstorm.png";
      break;
    case "snow":
      text =
        "The harsh winter air will make your skin really dry, thereby inhibiting the development of things. The most painful one is chapped lips in winter. Using extreme weather lip balm can prevent this from happening. It is a good idea to choose a brand that provides SPF protection, especially since snow can reflect up to 80% of harmful UV rays. Your body is using all these fluids to help your body stay warm in colder temperatures. Drink plenty of water before it snows, drink water all day.One of the easiest ways to keep your body temperature elevated is to wear a hat! Almost 50% of the heat in our body escapes through our head. Extreme weather can cause your body to consume more energy than usual, so it is important to ensure that it has sufficient energy throughout the day. Eat foods rich in protein and carbohydrates to keep your body alive. Some people may think that pulling their trousers onto their boots can prevent snow from entering, but if you exercise a lot, the trouser legs will slip and let in the cold air. However, tucking the trouser legs into the boots is like tucking the shirt into the pants. This will prevent cold air and snow from entering when you are out. If you have enough space in your boots, put a hand warmer on your toes to keep your feet warm during the day.";
      document.body.style.backgroundImage = "url('img/backgrounds/snow.jpg')";
      icon.src = "img/icons/snow.png";
      break;
    case "mist":
      text =
        "Fog is a cloud on the ground. It is a dense row of water droplets suspended in the atmosphere, thereby reducing visibility below 1 km. The mist is similar to fog, but the visibility remains above 1 km. For driving purposes, when visibility drops below 180m, it is usually only described as foggy, while pilots use the 1km benchmark. The smog is even thinner than fog. You should immerse your headlights in the water instead of driving in large beams, because the fog will reflect the light back to you. In addition, please use rear fog lights, but wait until the fog disappears to dazzle other drivers. Fog is usually a morning or evening phenomenon. In addition to increasing your following distance from the usual 2 seconds to 4-5 seconds, it also helps to use air conditioners and rear demisters to keep windows clean.If water accumulates on the screen, you can use the wiper, but remember that there may not be enough water to ensure continuous use of the wiper. There are lanes. Pick a point on the side of the road ahead and count four seconds. This will provide you with enough reaction time and stop time.";
      document.body.style.backgroundImage = "url('img/backgrounds/mist.jpg')";
      icon.src = "img/icons/mist.png";
      break;
    case "overcast clouds":
      text =
        "Darkish clouds mute and unfold the solar’s light, softening shadows which calms us. This allows us to absorb greater than whilst the sun shines brightly, satirically hiding so much in shadows. You can revel in those effects anywhere life is considerable, from dense mountain forests to open grasslands, to planted fields. Considering clouds block sunlight, they do have an effect on the system in both plants growing at the land and aquatic flora. Photosynthesis is also confined whilst sunlight hours are fewer in winter. The photosynthesis of aquatic plant life can also be constrained by using substances inside the water. Suspended debris of clay, silt or loose-floating algae can make it tough for plant life to make the sugar they need to grow. The rate of transpiration and water loss adjustments relying at the temperature of the air, humidity, wind, and the quantity of leaf floor region. While the weather is warm and sunny, a plant can lose a incredible quantity of water and suffer for it. On a fab, cloudy day, the plant might also transpire much less however preserve masses of water so it is right for flowers that climate be cloudy.";
      document.body.style.backgroundImage =
        "url('img/backgrounds/overcast_clouds.jpg')";
      icon.src = "img/icons/few_clouds.png";
      break;
    default:
      text = "Something went wrong";
  }
  document.body.style.backgroundRepeat = "no-repeat";
  return text;
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
