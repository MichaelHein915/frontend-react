const HomeBody = () => {
    const drinks = [{
        name: "Caramel Dream Latte",
        description: "A smooth espresso with steamed milk, buttery caramel, and a creamy whipped topping, finished with a caramel drizzle.",
        image: "/images/caramel2.jpg"
    },
    {
        name: "Mocha Bliss",
        description: "A classic espresso drink with a decadent twist. Rich espresso meets velvety steamed milk and smooth chocolate sauce, topped with a dollop of whipped cream and a sprinkle of cocoa powder.",
        image: "/images/mocha.jpg"
    }, {
        name: "Vanilla Bean Frappuccino",
        description: "A creamy, dreamy blend of vanilla bean, milk, and ice, topped with whipped cream and a sprinkle of vanilla bean powder. A sweet and refreshing treat for any time of day.",
        image: "/images/vanilla.jpg"
    },
    {
        name: "Iced Caramel Macchiato",
        description: "A refreshing and indulgent iced espresso drink. Rich espresso is poured over cold milk and swirled with sweet caramel syrup, creating a beautiful marbled effect. Finished with a drizzle of caramel for the perfect balance of sweet and bold.",
        image: "/images/machiatto.jpg"
    },
    {
        name: "Chai Tea Latte",
        description: "A warm and comforting spiced tea latte. Black tea is infused with cinnamon, clove, and other warming spices, then blended with steamed milk for a creamy and aromatic",
        image: "/images/chai.jpg"
    }];
    return (<>
        <div className="grid grid-rows-5 mt-10 gap-8">
            {
                drinks.map(drink => (
                    <div className="max-md:flex-col max-md:w-full flex flex-row align-center justify-center">
                        <img className="max-md:object-center w-160 h-140 object-cover max-md:w-full" src={drink.image} />
                        <div className="max-md:h-60 w-160 bg-[#F7F0E4] flex flex-col justify-center max-md:w-full max-md:text-[1rem]">
                            <h1 className="font-bold text-3xl text-center max-md:text-[1rem]">{drink.name}</h1>
                            <p className="text-center text-[1.3rem] mt-5 ml-20 mr-20 max-md:text-[1rem]">{drink.description}</p>
                            <button className="mt-10 border-1 w-30 rounded-2xl h-8 justify-center self-center cursor-pointer hover:bg-gray-200">Order now</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </>

    );
}

export default HomeBody;