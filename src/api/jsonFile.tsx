let readJSON = async () => {


        let response = await fetch('cities.json');
        let data = await response.json();
        console.log(data.country);
}


export default readJSON;