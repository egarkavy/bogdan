let originalJson = null;

fetch('https://api.jsonbin.io/v3/b/67001443ad19ca34f8b2b45d/latest')
    .then(response => response.json())
    .then(data => {
        const candidates = originalJson = data.record;
        let allVotes = 0 ;

        for (let i = 0; i < candidates.length; i++) {
            const id = i;

            const votesSpan = document.querySelector(`#c${id}-votes`);

            if (!votesSpan) {
                break;
            }

            votesSpan.innerText = candidates[i]['votes'];
            allVotes += candidates[i]['votes'];
        }

        for (let i = 0; i < candidates.length; i++) {
            const id = i;
            const percentSpan = document.querySelector(`#c${id}-percent`);
            percentSpan.innerText = (candidates[i]['votes'] / allVotes * 100).toFixed() + '%'; //perform percent calculation here;  
        }
    })

document.querySelectorAll('#vote-btn').forEach((button, index) => button.addEventListener('click', () => {
    const candidateToBump = originalJson[index];

    candidateToBump.votes = (candidateToBump.votes ?? 0) + 1;

    fetch('https://api.jsonbin.io/v3/b/67001443ad19ca34f8b2b45d', {
        method: 'PUT',
        body: JSON.stringify(originalJson),
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$CvPikJ.OdgPW7C63JA1P4OWMBknCK5oOgjLN5tvczDOz.PakshHT.',
            // 'X-Access-Key': ''
        },
    })
}))