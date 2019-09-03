#!/usr/bin/env node

const fs = require("fs")
const prependFile = require("prepend-file")

const path = "src/pages"

fs.readdir(path, function(err, items) {
  console.log(items)

  for (var i = 0; i < items.length; i++) {
    if (items[i].includes(".md")) {
      console.log(items[i])
      const header = `---
title: ${items[i].replace(/^[0-9]*-/gi, "").replace(".md", "")}
order: ${items[i].replace(/\D/g, "")}
---
`
      prependFile(`src/pages/${items[i]}`, header, function(err) {
        if (err) {
          console.error(err)
        }
        console.log('The "data to prepend" was prepended to file!')
      })
    }
  }
})
