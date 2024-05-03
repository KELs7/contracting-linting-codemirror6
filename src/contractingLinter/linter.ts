import { ensureSyntaxTree } from "@codemirror/language"
import { linter,  lintGutter, Diagnostic } from "@codemirror/lint"
import { illegalBuiltins, lintMessages } from "./whitelists";

export const lGutter = lintGutter;

export const contractingLinter = linter(view => {
  let diagnostics: Diagnostic[] = [];
  ensureSyntaxTree(view.state, view.state.doc.length).cursor().iterate(node => {
    if (node.name === "VariableName"){
        const sliceString = view.state.doc.sliceString(node.from, node.to);

        if (sliceString === "rt"){
            diagnostics.push({
                from: node.from,
                to: node.to,
                severity: "warning",
                message: lintMessages[13],
                actions: [{
                    name: "Remove",
                    apply(view, from, to) { view.dispatch({changes: {from, to}}) }
                }]
            })
        }
        if (illegalBuiltins.has(sliceString) && sliceString !== "float"){
            diagnostics.push({
                from: node.from,
                to: node.to,
                severity: "warning",
                message: lintMessages[13],
                actions: [{
                    name: "Remove",
                    apply(view, from, to) { view.dispatch({changes: {from, to}}) }
                }]
            })
        }
    
    }
    if (node.name === "PropertyName" && view.state.doc.sliceString(node.from, node.to) === "rt"){
        diagnostics.push({
            from: node.from,
            to: node.to,
            severity: "warning",
            message: lintMessages[13],
            actions: [{
                name: "Remove",
                apply(view, from, to) { view.dispatch({changes: {from, to}}) }
            }]
        })
    }
    if(node.name === "ClassDefinition"){
        diagnostics.push({
            from: node.from,
            to: node.to,
            severity: "warning",
            message: lintMessages[5],
            actions: [{
                name: "Remove",
                apply(view, from, to) { view.dispatch({changes: {from, to}}) }
            }]
        }) 
    }
    if(node.name === "async"){
        diagnostics.push({
            from: node.from,
            to: node.to,
            severity: "warning",
            message: lintMessages[6],
            actions: [{
                name: "Remove",
                apply(view, from, to) { view.dispatch({changes: {from, to}}) }
            }]
        }) 
    }
  })
  
  return diagnostics;
})
