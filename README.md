# 1pdf

Combine all PDF files in a directory 📂 into 1 PDF file

## Demo

Watch [1pdf video demo](https://www.youtube.com/watch?v=flhGgjPYar0) on Youtube

1pdf in action:\
![1pdf in action](https://yifanai.s3-ap-southeast-2.amazonaws.com/1pdf/1pdf-demo.gif)

1pdf usage demo:\
![1pdf usage demo](https://yifanai.s3-ap-southeast-2.amazonaws.com/1pdf/1pdf-demo.jpg)

1pdf efficiency statistics:\
![1pdf efficiency statistics](https://yifanai.s3-ap-southeast-2.amazonaws.com/1pdf/1pdf-stats.jpg)

## Background

I wanted to combine my lecture slides (several PDF files every week) into one PDF file, so that I can read, search, go back and forth while opening just one PDF file. 🤓

I used "https://combinepdf.com" at first, but it took me so long. 😴 \
Most of that time was spent on uploading and downloading the PDF files, not the actual process of combining the PDF files. 😞

What if I can combine PDF files locally? That means no more time wasted on uploading and downloading the PDF files! 😎 ...

## Getting Started

Install the '1pdf' package globally using npm

```
npm i -g 1pdf
```

✅

OR \
when you do not have write access to /usr/local/lib/node_modules, run
```
sudo npm i -g 1pdf
```
enter password when prompted and hit enter/return

✅

## Usage

Step 1. ```cd``` into a directory containing PDF files to be combined

Step 2. (Optional) Rename the PDF files in your desired order

Step 3. Run
```
1pdf
```
to combine the PDF files into one PDF file

OR

Run
```
1pdf myFileName.pdf
```
to name the output PDF file at the same time

✅

## Package Structure

```
.
|-- README.md
|-- bin
|   `-- combine
|-- combine_pdf_files.js
|-- package-lock.json
`-- package.json
```

## Authors

* **Yifan Ai** - *Initial work*

See also the list of [contributors](https://github.com/yifaneye/1pdf/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License
