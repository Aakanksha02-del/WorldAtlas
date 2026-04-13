export default function About() {
  const data = [
    {
      name: "India",
      capital: "New Delhi",
      population: "1.42B",
      fact: "India has the world's largest democracy."
    },
    {
      name: "Australia",
      capital: "Canberra",
      population: "25.6M",
      fact: "Australia has more kangaroos than people."
    },
    {
      name: "Brazil",
      capital: "Brasília",
      population: "214M",
      fact: "The Amazon Rainforest produces 20% of the world's oxygen."
    },
    {
      name: "France",
      capital: "Paris",
      population: "67M",
      fact: "France is the most visited country in the world."
    },
    {
      name: "Russia",
      capital: "Moscow",
      population: "146M",
      fact: "Russia spans 11 time zones."
    },
    {
      name: "China",
      capital: "Beijing",
      population: "1.4B",
      fact: "The Great Wall is over 21,000 km long."
    },
  {
    name: "Japan",
    capital: "Tokyo",
    population: "125M",
    fact: "Japan has over 6,800 islands."
  },
  {
    name: "Egypt",
    capital: "Cairo",
    population: "110M",
    fact: "The pyramids are over 4,500 years old."
  }
  
  ];

  return (
    <div className="about-page">
      <h1 className="about-title">Here are the Interesting Facts
         <br />
               we're proud of</h1>

      <div className="card-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.name}</h2>
            <p><span>Capital:</span> {item.capital}</p>
            <p><span>Population:</span> {item.population}</p>

            <div className="fact-box">
              <span>Interesting Fact</span>
              <p>{item.fact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}