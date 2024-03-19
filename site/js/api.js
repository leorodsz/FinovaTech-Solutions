function fetchCurrencyData() {
    const apiKey = 'c8ac77e76117b85416f00733'; // Substitua pela sua chave de API do ExchangeRate-API
    const apiUrl = `https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const tickerElement = document.getElementById('ticker');
        tickerElement.innerHTML = '';

        for (const currency in data.rates) {
          const currencyValue = `${currency}: ${data.rates[currency]}   `;
          tickerElement.innerHTML += currencyValue;
        }
      })
      .catch(error => console.error('Erro ao obter dados da API:', error));
  }   

  // Atualizar dados a cada 60 segundos (ajuste conforme necessário)
  setInterval(fetchCurrencyData, 60000);

  // Carregar dados pela primeira vez
  fetchCurrencyData();