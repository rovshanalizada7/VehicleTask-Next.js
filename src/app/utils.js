export async function getServerSideProps() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${apiBaseUrl}/GetMakesForVehicleType/car?format=json`);
    const data = await response.json();
  
    return {
      props: { makes: data.Results },
    };
  }
  