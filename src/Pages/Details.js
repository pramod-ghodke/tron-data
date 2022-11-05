import React, { createContext, useState } from 'react';

export const store = createContext()

const Details = (props) => {
  const [details, setDetails] = useState([
    {
      "id": 1,
      "title": "Best Soldering Tools, Equipment, and Accessories",
      "Image": "https://www.electronicshub.org/wp-content/uploads/2021/04/Soldering-Station-1.jpg",
      "category": "Bollywood",
      "description": "Soldering is a very intricate process used to join two materials without fusing them. Unlike welding, it does not melt the metals. Instead, it melts solder (filler material) and joins the two metals.To perform such an intricate process effectively, you have to equip yourself with the right set of equipment.Soldering is used in different industries like plumbing, electronic assembly, automotive repairs, and making jewelry. You can not use the same set of tools for all soldering applications. A soldering station is a complete kit that comes with all the essential tools for soldering. The common tools include soldering iron, hot air guns, and de-soldering tools. A soldering station is commonly used to solder sensitive electronic components as you can set the precise temperature of the soldering tip. You have to plug the soldering station into a power outlet and set the temperature to the lowest. Step by step, you have to increase the temperature until the solder melts."
    
    },
    {
      "id": 2,
      "title": "All about basics of Light Emitting Diode",
      "Image": "https://www.electronicshub.org/wp-content/uploads/2019/01/LED-Symbols.png",
      "category": "Bollywood2",
      "description": "Light Emitting Diode or simply LED is one of the most commonly used sources of light now-a-days. Whether it may be your car’s headlights (or daytime running lights) or your home’s living room lights, the applications of LEDs are countless. Unlike (almost) legacy filament bulbs, LEDs (and fluorescent bulbs) need a special circuit to make them work. They are simply called as LED Drivers (or a ballast in case of fluorescent bulbs). Since LEDs are inevitable in our lives, it is a good idea for the interested folks (engineers, driver designers etc.) to get to know the Light Emitting Diode Basics. This article is composed as a brief understanding guide to LED, which includes a brief introduction, the electrical symbol of LED, types, construction, characteristics, LED Drivers and many."
    },
   
  {
      "id": 3,
      "title": "IoT Based Car Parking System Using Arduino",
      "Image": "https://www.mokosmart.com/wp-content/uploads/2022/03/Smart-parking-system-using-IoT.webp",
      "category": "Bollywood",
      "description": "The proposed smart parking system is very useful in electric vehicle charging stations and this technology is going to a boon for those who are passing beside the charging stations equipped with this system. Now the motorists can see number of vacant chargers on their smartphone and plan their journey accordingly. In conclusion, the main purpose of a smart vehicle parking system is to save time and reduce hassle for motorists to find a parking lot with a vacant parking spot; otherwise a driver may need to spend their time to find if there are any vacant parking spot left or should they move on to an another parking lot and this situation may put many motorists to mental stress especially those who are in an urgent circumstances."
    },
    {
      "id": 4,
      "title": "The Boost Converter Circuit Using IC 555",
      "Image": "https://circuitdigest.com/sites/default/files/projectimage/555-Timer-based-DC-DC-Boost-Converter.jpg",
      "category": "Bollywood2",
      "description": "Boost converter is a DC to DC step-up voltage converter whose output voltage is always greater than its input while its output current is lower than its input. It is a category of switch mode power supply or SMPS which can efficiently convert voltage from one level to another and its input and output power are ideally the same. A basic practical boost converter circuit consists of two semiconductor and two energy storage components. The two semiconductor components are a switching MOSFET and a schottky diode; the two energy storage components are an inductor which plays a key role in boosting voltage and a capacitor to smooth the DC output."
    },
    {
      "id": 5,
      "title": "Three Phase Inverter Circuit Diagram",
      "Image": "https://i.ytimg.com/vi/Jl8PHbv4KQs/hqdefault.jpg",
      "category": "Bollywood",
      "description": "Akshay Kumar and Manushi Chhillar have kick-started promotions for their upcoming movie Prithviraj, which will be released on June 3. In a recent appearance on a comedy reality show, Akshay was all praise for Manushi Chhillar’s sharp memory. Manushi Chhillar also reciprocated by complimenting Akshay Kumar.In the reality show, Akshay Kumar said, If I talk about Manushi, she has such a sharp memory. She used to memorise all the dialogues, hers, mine as well as those of other actors. She could remember the toughest of words. The duo were also joined by the director, Chandraprakash Dwivedi, for the promotion of the movie on the reality show. He spoke in-depth about the upcoming release. The movie also stars Sanjay Dutt, Sonu Sood, Ashutosh Rana, and Sakshi Tanwar in pivotal rolesManushi also said that even though she loves Akshay Kumar’s comedy movies, she strongly feels that Prithviraj is his best movie to date. She said, I am a big fan of sir’s comedy and the few comedy films that sir has done. But, after watching Prithviraj, I can definitely say that Prithviraj is my favourite film of sir."
    },
    {
      "id": 6,
      "title": "The Boost Converter Circuit Using IC 555",
      "Image": "https://circuitdigest.com/sites/default/files/projectimage/555-Timer-based-DC-DC-Boost-Converter.jpg",
      "category": "Bollywood3",
      "description": "Boost converter is a DC to DC step-up voltage converter whose output voltage is always greater than its input while its output current is lower than its input. It is a category of switch mode power supply or SMPS which can efficiently convert voltage from one level to another and its input and output power are ideally the same. A basic practical boost converter circuit consists of two semiconductor and two energy storage components. The two semiconductor components are a switching MOSFET and a schottky diode; the two energy storage components are an inductor which plays a key role in boosting voltage and a capacitor to smooth the DC output."
    },
    {
      "id": 7,
      "title": "This is 4",
      "Image": "https://i.ytimg.com/vi/Jl8PHbv4KQs/hqdefault.jpg",
      "category": "Bollywood4",
      "description": "Akshay Kumar and Manushi Chhillar have kick-started promotions for their upcoming movie Prithviraj, which will be released on June 3. In a recent appearance on a comedy reality show, Akshay was all praise for Manushi Chhillar’s sharp memory. Manushi Chhillar also reciprocated by complimenting Akshay Kumar.In the reality show, Akshay Kumar said, If I talk about Manushi, she has such a sharp memory. She used to memorise all the dialogues, hers, mine as well as those of other actors. She could remember the toughest of words. The duo were also joined by the director, Chandraprakash Dwivedi, for the promotion of the movie on the reality show. He spoke in-depth about the upcoming release. The movie also stars Sanjay Dutt, Sonu Sood, Ashutosh Rana, and Sakshi Tanwar in pivotal rolesManushi also said that even though she loves Akshay Kumar’s comedy movies, she strongly feels that Prithviraj is his best movie to date. She said, I am a big fan of sir’s comedy and the few comedy films that sir has done. But, after watching Prithviraj, I can definitely say that Prithviraj is my favourite film of sir."
    },
  
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}


      </store.Provider>
    </div>
  )
}

export default Details;