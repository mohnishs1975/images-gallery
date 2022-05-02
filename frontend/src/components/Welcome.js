import React from "react";

const Welcome = () => {
    return (
        <div class="container-fluid bg-light text-dark p-5">
            <div class="container bg-light p-5">
                <h1 class="display-4 fw-bold">Images Gallery</h1>
                    <p>This is a simple application that searches for free high quality photos. To start enter a term in the search field.</p>
                    <a href="https://unsplash.com" class="btn btn-primary">Learn More</a>
            </div>
        </div>
    )
}

export default Welcome;
