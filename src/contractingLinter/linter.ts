import { ensureSyntaxTree } from "@codemirror/language"
import { linter,  lintGutter, Diagnostic } from "@codemirror/lint"
import { illegalBuiltins, lintMessages } from "./whitelists";
import {  ORM_CLASS_NAMES  } from "./config";

export const lGutter = lintGutter;

export const contractingLinter = linter(view => {
  let diagnostics: Diagnostic[] = [];
  ensureSyntaxTree(view.state, view.state.doc.length).cursor().iterate(node => {
    if (node.name === "VariableName"){
        let sliceString = view.state.doc.sliceString(node.from, node.to);
        // check for the use of "rt"
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
        // check for illegal builtins
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
        // check for x = Hash, x = Variable, x = ForeignHash, x = ForeignVariable
        if (
            node.node._parent.name === "AssignStatement" && 
                ORM_CLASS_NAMES.has(sliceString)
        ){
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
        // check for "contract" and "name" parameter names in Hash, Variable, ForeignHash, ForeignVariable
        if(
          node.node._parent.name === "CallExpression" &&
            ORM_CLASS_NAMES.has(sliceString) 
        ){
          node.node.cursor().iterate(node=>{
            sliceString = view.state.doc.sliceString(node.from, node.to);

            if(
              node.node._parent.name === "ArgList" && 
                (sliceString === "contract" || sliceString === "name")
            ){
              diagnostics.push({
                from: node.from,
                to: node.to,
                severity: "warning",
                message: lintMessages[10],
                actions: [{
                  name: "Remove",
                  apply(view, from, to) { view.dispatch({changes: {from, to}}) }
                }]
              })
            }
          })
        }
    }
    // check for the use of x.rt
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
    // check for class definition
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
    // check for async functions
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
