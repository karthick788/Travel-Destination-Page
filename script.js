const destinations = [
    {
        id: 1,
        name: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1338&q=80",
        description: "Tropical paradise with lush jungles & beaches.",
        rating: 4.8
    },
    {
        id: 2,
        name: "Santorini, Greece",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1338&q=80",
        description: "White-washed buildings with stunning sunsets.",
        rating: 4.9
    },
    {
        id: 3,
        name: "Kyoto, Japan",
        image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: "Cherry blossoms & ancient temples.",
        rating: 4.7
    },
    {
        id: 4,
        name: "Swiss Alps, Switzerland",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: "Snowy peaks & breathtaking landscapes.",
        rating: 4.9
    },
    {
        id: 5,
        name: "Paris, France",
        image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: "The city of love & iconic landmarks.",
        rating: 4.6
    },
    {
        id: 6,
        name: "New York, USA",
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        description: "Skyscrapers & vibrant city life.",
        rating: 4
    }
];
function displayDestinations() {
    const container = document.getElementById('destination-container');
    container.innerHTML = destinations.map(dest => `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${dest.image}" class="card-img-top" alt="${dest.name}">
                <div class="card-body">
                    <h5 class="card-title">${dest.name}</h5>
                    <p class="card-text">${dest.description}</p>
                    <div class="rating mb-3">
                        ${'⭐'.repeat(Math.floor(dest.rating))} (${dest.rating})
                    </div>
                    <button class="btn btn-primary w-100">Book Now</button>
                </div>
            </div>
        </div>
    `).join('');
}
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        alert("Thank you! We'll contact you soon.");
        this.reset();
    } else {
        alert("Please fill all required fields.");
    }
});
window.addEventListener('DOMContentLoaded', displayDestinations);