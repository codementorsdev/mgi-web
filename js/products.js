const productDetails = {
    "parboiled-rice-ir64": {
        "name": "Parboiled Rice IR64",
        "description": "Parboiled Rice IR64 is a premium variety of rice that has undergone partial boiling while still in the husk. This process locks in more nutrients and enhances its texture, making it a perfect choice for cooking a variety of dishes. Known for its long, slender grains, this rice holds its shape well even after cooking, and has a slightly firmer texture than regular white rice. It is rich in essential nutrients like B vitamins and minerals, offering numerous health benefits. Parboiled rice also boasts a lower glycemic index, making it a great choice for health-conscious individuals looking to maintain stable blood sugar levels.",
        "short_description": "High-quality IR64 parboiled rice, known for its long grains, excellent cooking properties, and rich nutritional value. Perfect for daily meals and bulk supply.",
        "specifications": [
            { "question": "What is Parboiled Rice IR64?", "answer": "IR64 Parboiled Rice is a variety that has been partially boiled in its husk, enhancing its nutritional content and making it less sticky during cooking. This rice retains its shape and texture, making it ideal for a variety of dishes like biryani, pilaf, and steamed rice." },
            { "question": "What are the nutritional values?", "answer": "Per 100g: Calories - 360 kcal, Carbohydrates - 80g, Protein - 7g, Fat - 0.5g, Fiber - 1g. It's rich in essential nutrients such as vitamin B, iron, and magnesium, and is a source of complex carbohydrates for sustained energy." },
            { "question": "What are the benefits?", "answer": "The process of parboiling helps retain a higher level of vitamins, particularly B vitamins, which are beneficial for metabolic processes. It also has a lower glycemic index, helping with blood sugar management and improving digestion." },
            { "question": "Where is it used?", "answer": "Commonly used in a variety of South Asian and African dishes such as biryani, pulao, fried rice, and as a side dish to curries. It is also used for bulk cooking due to its long shelf life." },
            { "question": "How should it be cooked?", "answer": "Parboiled rice can be cooked in a rice cooker, stove, or pressure cooker. Use a water-to-rice ratio of 2:1 for best results. Rinse the rice thoroughly before cooking to remove excess starch." }
        ],
        "img": "images/parboiled-rice-ir64.jpeg"
    },
    "split-chickpeas": {
        "name": "Split Chickpeas",
        "description": "Split Chickpeas, also known as Chana Dal, are a highly nutritious and versatile legume, often found in Indian and Middle Eastern kitchens. These golden-hued, split peas are rich in protein, fiber, and essential nutrients. They have a slightly nutty flavor that becomes milder when cooked, making them perfect for soups, stews, and curries. Split chickpeas are a great plant-based protein source and can easily replace meat in vegetarian and vegan dishes. They are also a good source of iron, helping in maintaining healthy red blood cells and preventing anemia.",
        "short_description": "Premium-grade split chickpeas (chana dal) with a rich yellow color, high protein content, and a delicious nutty flavor, ideal for various traditional dishes.",
        "specifications": [
            { "question": "What is Split Chickpeas?", "answer": "Split Chickpeas, or Chana Dal, are dried chickpeas that have been split in half, removing the skin. They are often used in a variety of traditional dishes, especially in Indian cuisine, and are known for their nutty flavor." },
            { "question": "What are the nutritional values?", "answer": "Per 100g: Calories - 350 kcal, Protein - 20g, Carbohydrates - 60g, Fat - 5g, Fiber - 10g. Chana dal is also rich in folate, iron, and magnesium." },
            { "question": "What are the benefits?", "answer": "Chana dal is a great source of plant-based protein, making it an excellent option for vegetarians and vegans. It also provides a good amount of dietary fiber, aiding in digestion and promoting heart health." },
            { "question": "Where is it used?", "answer": "This ingredient is a staple in many Indian dishes like dal, soups, curries, and stews. It is often used in both savory and sweet preparations, making it a versatile addition to any kitchen." },
            { "question": "How should it be cooked?", "answer": "Chana dal should be soaked for a few hours before cooking to reduce cooking time. Boil in water until soft and incorporate into soups, curries, or as a side dish." }
        ],
        "img": "images/split-chickpeas.jpeg"
    },
    "pigeon-pea": {
        "name": "Pigeon Peas",
        "description": "Pigeon Peas, also known as Toor Dal, are a type of pulse that is widely used in Indian, African, and Caribbean cuisines. These yellow, split peas have a mild, earthy flavor and soft texture once cooked. They are a rich source of plant-based protein, essential amino acids, and dietary fiber, making them an excellent food choice for vegetarians and health-conscious individuals. Pigeon peas are also high in antioxidants and micronutrients like iron and magnesium, which support overall health and well-being. Their rich flavor makes them perfect for hearty dal preparations, soups, and curries.",
        "short_description": "Nutritious and protein-rich pigeon peas (toor dal), perfect for making hearty and flavorful dal recipes, widely used in Indian and international cuisines.",
        "specifications": [
            { "question": "What is Pigeon Peas?", "answer": "Pigeon Peas, or Toor Dal, are small, oval-shaped legumes with a golden-yellow color. They are widely used in Indian cuisine for making dal, soups, and stews." },
            { "question": "What are the nutritional values?", "answer": "Per 100g: Calories - 340 kcal, Protein - 22g, Carbohydrates - 63g, Fat - 1.5g, Fiber - 8g. Pigeon peas are also a good source of vitamin B6, folate, and potassium." },
            { "question": "What are the benefits?", "answer": "Pigeon peas are an excellent source of protein and fiber, which helps maintain muscle mass and supports digestion. They are also known to aid in regulating blood sugar levels and improving heart health." },
            { "question": "Where is it used?", "answer": "Toor dal is a common ingredient in Indian cuisine, used to prepare dal fry, sambhar, and various soups and stews. It is also popular in Caribbean and African cuisines." },
            { "question": "How should it be cooked?", "answer": "Toor dal can be cooked in a pressure cooker or stovetop with water and spices. It should be boiled until soft and then used in curries, stews, or soups. Adding turmeric, cumin, and coriander enhances its flavor." }
        ],
        "img": "images/pigeon-pea.jpeg"
    }
   
};

function goToProductPage(productId) {
    window.location.href = `product-details.html?p=${productId}`;
}

