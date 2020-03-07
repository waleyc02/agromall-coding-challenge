fetch('https://theagromall.com/api/v2/get-sample-farmers?limit=1')
.then((resp) => resp.json())
.then((data) => {
    ProfileCard.setData(data.results[1]);
});

const ProfileCard = (() => {
    const profile = document.querySelector('.profile');
  
})();

setData: (data) => {
    let fullname = `${data.first_name}`;
  
}

const ProfileCard = (() => {
    const profile = document.querySelector('.profile');
;

    return {
        setData: (data) => {
            let fullname = `${data.user.first_name}`;
        }
    }
})();

fetch('https://theagromall.com/api/v2/get-sample-farmers?limit=2')
.then((resp) => resp.json())
.then((data) => {
    ProfileCard.setData(data.results[1]);
});
