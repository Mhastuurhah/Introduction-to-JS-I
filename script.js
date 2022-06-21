function personalInfo(name, height, country) {
    // Prints out your name, height, and country on the screen
    document.write(`Name: ${name.charAt(0).toUpperCase() + name.slice(1)}<br>`)
    document.write(`Height: ${height} foot tall<br>`)
    document.write(`Country: ${country.charAt(0).toUpperCase() + country.slice(1)}`)
}
// Call function
personalInfo("masturah", 5,"nigeria")