const data = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    { title: "Title 5", description: "Description 5" },
];

const fetchHttpMock = (id, timeout = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data[id]);
        }, timeout);
    });
};

const ids = [0, 1, 2, 3, 4];

const requests = ids.map(id => {
    return fetchHttpMock(id);
});

Promise.all(requests).then(result => {
    result.forEach( (data) => {
        let {title, description} = data;
        console.log(`Title: ${title}`);
    })
});
