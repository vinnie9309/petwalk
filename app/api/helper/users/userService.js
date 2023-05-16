export async function getUsers(userType) {
    // const userImageLisRef = ref( storage, "/profileImages" );
    const getResponse =  async () => {
        const fetchUsers = await fetch('https://petwalker-d43e0-default-rtdb.europe-west1.firebasedatabase.app/petSitters.json');
        const usersTojson = await fetchUsers.json();
        const storeSitters = [];
        const storeOwners = [];
        
        // TODO: Do this in a better way, no boilerplate
        for ( const user in usersTojson ) {
            const insideData = usersTojson[user].sitterData;
            const name = insideData.find( userData => userData.nameVal ).nameVal;
            const dailyRateOption = insideData.find( userData => userData.rateOption ).rateOption;
            const dailyRate = insideData.find( userData => userData.rateVal ).rateVal;
            const selectedUser = insideData.find( userData => userData.regOption ).regOption;
            const describtion = insideData.find( userData => userData.jobDescribeVal ).jobDescribeVal;
            const selectedHoods = insideData.find( userData => userData.selectedHoods )['selectedHoods'];
            const selectedServices = insideData.find( userData => userData.labelNames )['labelNames'].map( (item) => item.label );
            const userImage = insideData.find( userData => userData.userImg ).userImg;
            // console.log(insideData);

            //Adding only the users that have selected to be a sitter
            if ( selectedUser === 'sitter' ) {
                storeSitters.push({
                    name,
                    dailyRate,
                    dailyRateOption,
                    describtion,
                    selectedHoods,
                    selectedServices,
                    userImage,
                    id: user
                });
            } else {
                storeOwners.push({
                    name,
                    dailyRate,
                    dailyRateOption,
                    describtion,
                    selectedHoods,
                    selectedServices,
                    userImage,
                    id: user
                })
            }
        }
        return userType === 'sitters' ? storeSitters : storeOwners;
    }

    return getResponse();
}
