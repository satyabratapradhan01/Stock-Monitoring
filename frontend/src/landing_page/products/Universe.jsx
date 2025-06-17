import React from "react";


function Universe() {
    const platforms = [
        {
            name: "Zerodha Fund House",
            img: "images/zerodhaFundhouse.png",
            desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
        },
        {
            name: "Sensibull",
            img: "images/sensibullLogo.svg",
            desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
        },
        {
            name: "Tijori",
            img: "images/tijori.svg",
            desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
        },
        {
            name: "Streak",
            img: "images/streakLogo.png",
            desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
        },
        {
            name: "smallcase",
            img: "images/smallcaseLogo.png",
            desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
        },
        {
            name: "Ditto",
            img: "images/dittoLogo.png",
            desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
        },
    ];

    return (
        <div className="container text-center my-5">
            <h1 className="fw-bold">The Zerodha Universe</h1>
            <p className="text-muted mb-5">
                Extend your trading and investment experience even further with our partner platforms
            </p>

            <div className="row g-4">
                {platforms.map((platform, idx) => (
                    <div key={idx} className="col-md-4">
                        <div className="card border-0 h-100">
                            <div className="card-body">
                                <img src={platform.img} alt={platform.name} className="mb-3" style={{ height: "50px" }} />
                                <p className="text-muted small">{platform.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <button className="btn btn-primary btn-lg px-4">Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;
