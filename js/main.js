function SearchBar() {
    const input = document.getElementById("search").value.toLowerCase();

    const topics = {
        "oop": "definition",
        "object-oriented programming": "definition",
        "definition": "definition",
        "encapsulation": "encapsulation",
        "inheritance": "inheritance",
        "polymorphism": "polymorphism",
        "abstraction": "abstraction",
        "pillars": "pillars"
    };

    let found = false;

    for (let key in topics) {
        if (input.includes(key)) {
            const section = document.getElementById(topics[key]);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                found = true;
                break;
            }
        }
    }

    if (!found) {
        alert("Topic not found. Try: OOP, Encapsulation, Inheritance, Polymorphism, or Abstraction.");
    }
}

document.getElementById("search").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        SearchBar();
    }
});
