const inputC = document.getElementById('cidade');
const buttonInfo = document.getElementById('buscar');
const resultadoDiv = document.getElementById('resultado');


buttonInfo.addEventListener('click', () => {
    const inputCV = inputC.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCV}&appid=d7a8d944e376f6e9e6fd3af2bb39f6d9&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro >>>' + response.status);
            }
            return response.json();
        })
        .then(data => {
            
            resultadoDiv.innerHTML = `
                <h2>Previsão do Tempo para ${data.name}</h2>,
                <p>Temperatura: ${data.main.temp}°C</p>,
                <p>Clima: ${data.weather[0].description}</p>,
                <p>Umidade: ${data.main.humidity}%</p>,
                <p>Velocidade do vento: ${data.wind.speed} m/s</p>
            `;
            const temperatura = data.main.temp;

        })
        .catch(error => {
            console.error('Erro >>>', error);
            resultadoDiv.innerHTML = '<p>Erro ao obter dados <<<.</p>';
        });
});
