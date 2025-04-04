$(document).ready(function () {
    // ✅ Your OpenWeatherMap API Key
    const apiKey = '9372676f320d67615b7820dd178fe990';
  
    // 🔍 When the search button is clicked...
    $('#searchBtn').click(function () {
      const city = $('#cityInput').val().trim();
  
      // 🚨 Make sure the user typed something
      if (city === '') {
        alert('Please enter a city name.');
        return;
      }
  
      // 🌍 API URL with city and metric (Celsius)
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      // 📡 Make AJAX call to OpenWeatherMap API
      $.ajax({
        url: apiUrl,
        method: 'GET',
  
        success: function (data) {
          // 🌆 Display the city and country
          $('#location').text(`${data.name}, ${data.sys.country}`);
  
          // 🌤️ Weather description (e.g., "clear sky")
          $('#description').text(data.weather[0].description);
  
          // 🌡️ Temperature (rounded to 1 decimal)
          $('#temperature').text(`Temperature: ${data.main.temp.toFixed(1)} °C`);
  
          // 🖼️ Show weather icon
          const iconCode = data.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
          $('#weatherIcon').attr('src', iconUrl).attr('alt', data.weather[0].description);
  
          // 👀 Show the weather info section
          $('#weatherInfo').removeClass('hidden');
        },
  
        error: function () {
          alert('City not found. Please try again.');
          $('#weatherInfo').addClass('hidden');
        }
      });
    });
  });
  
  