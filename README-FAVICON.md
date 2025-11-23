# Creating a Circular Favicon

To create a circular version of your icon.png for the favicon:

## Option 1: Online Tool (Easiest)
1. Go to https://realfavicongenerator.net/
2. Upload your `icon.png`
3. Select "Circular" shape
4. Download and replace `icon.png` with the circular version

## Option 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first, then run:
magick icon.png -resize 180x180 -gravity center -extent 180x180 -background transparent -alpha on -format png favicon-circle.png
```

## Option 3: Using Image Editing Software
1. Open `icon.png` in Photoshop, GIMP, or any image editor
2. Create a circular crop/mask
3. Export as PNG
4. Replace `icon.png` with the circular version

Once you have a circular version, replace `public/icon.png` with it and the favicon will display correctly.

