const loadAgents = async () => {
  try {
    const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-MX')

    if (response.status === 200) {
      const data = await response.json()

      data.data.forEach(agent => {
        const container = document.querySelector('.container')

        container.innerHTML += `
        <div class="card">
          <div class="card-header">
            <img src="${agent.displayIcon}" alt="${agent.displayName}" class="card-img-top" style="background: url('${agent.background}')" />
          </div>
          <div class="card-body">
            <h3 class="fw-bold">${agent.displayName}</h3>
            <p>${agent.description}</p>
          </div>
          <div class="card-footer">
            <img src="${agent.role.displayIcon}" alt="${agent.role.displayName}" />
            ${agent.role.displayName}
          </div>
        </div>
        `
      })
    } else if (response.status === 401) console.log('Credential error: ' + response.status)
    else if (response.status === 404) console.log('URL not found: ' + response.status)
  } catch (err) {
    console.log(err)
  }
  document.querySelector('.loader').style.display = 'none'
}

loadAgents()
