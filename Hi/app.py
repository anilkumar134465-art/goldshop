import os
import logging
from flask import Flask, render_template

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default_secret_key_for_development")

# Sample product data using the provided stock photos
PRODUCTS = [
    # Gold Necklaces
    {
        'id': 1,
        'name': 'Elegant Gold Chain Necklace',
        'category': 'necklace',
        'price': 299.99,
        'image': 'https://pixabay.com/get/ge616c74c754fe20f83ede60e29277f8401c71238ab0a8d8f7a216cab06ae9ab096f44e56524d6c3b2a99ed3486469fd84a27cf6301825bceb8d25fc4a25f42d1_1280.jpg'
    },
    {
        'id': 2,
        'name': 'Classic Gold Pendant Necklace',
        'category': 'necklace',
        'price': 449.99,
        'image': 'https://pixabay.com/get/g9a905a609ab2de9f40ca81b791e01de5c708a8c05a5c3a5305b33246ee6e060326558395388349b84b70bad2f9ecc53d26001edd4eb6de38983ef79e48bfa009_1280.jpg'
    },
    {
        'id': 3,
        'name': 'Luxury Gold Statement Necklace',
        'category': 'necklace',
        'price': 799.99,
        'image': 'https://pixabay.com/get/gd5425b6c5f7b3d592f2c8ce90c1c65dd963a69b5ace4f8ff77490fc102a0b090211f816c1d059bede3a9df93dc1f7104f5de6a15ca787b38dfe8fd3618df8a09_1280.jpg'
    },
    {
        'id': 4,
        'name': 'Designer Gold Chain Necklace',
        'category': 'necklace',
        'price': 649.99,
        'image': 'https://pixabay.com/get/g286ac36bb920aa3f671545d1a052a7eafaa580c4a8ba7d98529a5b0f1f28a548f52ce9a8daa4418c7455e52c3cd2672d68fec122dc04cc91e394587092f78d62_1280.jpg'
    },
    # Gold Rings
    {
        'id': 5,
        'name': 'Classic Gold Wedding Ring',
        'category': 'ring',
        'price': 199.99,
        'image': 'https://pixabay.com/get/ga1d3074f8523e4741349148b9068476407a9b4106c5782e02b2e29d68fbc0fa4a066cffe0e324cb173316c5d8a4788573209b6af8a2a03893d52a7cfd0bbc88d_1280.jpg'
    },
    {
        'id': 6,
        'name': 'Elegant Gold Diamond Ring',
        'category': 'ring',
        'price': 899.99,
        'image': 'https://pixabay.com/get/ga6b8f978cb831eaa7d5acb4e572060180ebf445a9c12f2f957724feefa5b979914b352bda02556182dc0823ec8d3b9479ceb2f2b558b046c3ae89d240386b251_1280.jpg'
    },
    {
        'id': 7,
        'name': 'Vintage Gold Ring',
        'category': 'ring',
        'price': 349.99,
        'image': 'https://pixabay.com/get/gbfe6f7699bd25f81d16622f2a57c8a5ba8a9d8aa0f698df62225436543c9f75a080dad20a0a589b99d0199fbfb86aa70e611196651706972efaed106c2506ea3_1280.jpg'
    },
    {
        'id': 8,
        'name': 'Modern Gold Band Ring',
        'category': 'ring',
        'price': 279.99,
        'image': 'https://pixabay.com/get/g90da7ab0a728d98cafccfc7c15c96b269a5660333fbbcb9eaeb2ed287044418bcc5b7340d2c8a06e3f62ec735dac98be8f3e1f6c8f7b6e3e416edc1bc5c8a9df_1280.jpg'
    },
    # Gold Bracelets
    {
        'id': 9,
        'name': 'Delicate Gold Chain Bracelet',
        'category': 'bracelet',
        'price': 189.99,
        'image': 'https://pixabay.com/get/gda48dab69ad4f1bfc30f5e0a5a62eb0a8de33ffdd47b99d96190a4269c6af602213d3c37885a5a27f7464c9d5635e22668da021b17be40edc2764f9b1e96db56_1280.jpg'
    },
    {
        'id': 10,
        'name': 'Bold Gold Cuff Bracelet',
        'category': 'bracelet',
        'price': 429.99,
        'image': 'https://pixabay.com/get/g794de15ac84f919606b465c9e45e8764570e6f007db2e983be2cf28096061cf7b7c6fd6fd0dbf40e9a9488b3032785779a823980ce3f7c5ad263132917a3bd32_1280.jpg'
    },
    {
        'id': 11,
        'name': 'Elegant Gold Tennis Bracelet',
        'category': 'bracelet',
        'price': 699.99,
        'image': 'https://pixabay.com/get/gdb8fb94bbff0c4ef1b5444b01cb338bc9de315f4813d218c8d15c8a9996d441b7a773dc562903e0cd7d47552c888abee1390148b9df15efa6cecd790750a94f7_1280.jpg'
    },
    {
        'id': 12,
        'name': 'Luxury Gold Charm Bracelet',
        'category': 'bracelet',
        'price': 549.99,
        'image': 'https://pixabay.com/get/g3c123ee68768101bb9d05ca36b95e23906aed2ecbbdb006c7638255a0e41784711a7c96bba2f33db01fa49357a47446f6aee4116a2ea932a5b3b486313139b5d_1280.jpg'
    }
]

@app.route('/')
def index():
    """Main page displaying all products"""
    return render_template('index.html', products=PRODUCTS)

@app.route('/category/<category_name>')
def category(category_name):
    """Filter products by category"""
    filtered_products = [p for p in PRODUCTS if p['category'] == category_name]
    return render_template('index.html', products=filtered_products, active_category=category_name)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
