function log(input) {
    if (typeof input === "string") {
        console.log(`Log: ${input}`);
    }
    else {
        input.forEach(msg => console.log(`Log: ${msg}`));
    }
}
log("System started");
log(["User logged in", "Error occurred"]);
//# sourceMappingURL=index.js.map