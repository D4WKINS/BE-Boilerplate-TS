const notfound = (req: any, res: any, next: any) => {
    res.status(404).send("Sorry can't find that!")
}
const errorhandler = (err: any, req: any, res: any, next: any) => {
    res.status(500).send("Something broke!")
}

// Tom was here
// Tom was here again from VSCode and not from a web browser

const failingroute = (req: any, res: any, next: any) => {
    throw new Error("Something broke!") // throws an error
}

export { notfound, errorhandler, failingroute }
