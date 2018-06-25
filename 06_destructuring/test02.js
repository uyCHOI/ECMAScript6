const person = {
    name: 'Lee',
    address: {
      zipCode: '03068',
      city: 'Seoul'
    }
};

const { address: { city } } = person;
console.log(city); // 'Seoul'