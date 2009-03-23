        /***** Tell WMD not to start up automatically *****/
        // Set this *before* you load wmd.js
        // Otherwise you'll end up with two editors on top of each other!
        wmd_options = { autostart: false };
    
        var instances = [];
        
        function createInstance() {
        
            /***** Make sure WMD has finished loading *****/
            if (!Attacklab || !Attacklab.wmd) {
                alert("WMD hasn't finished loading!");
                return;
            }
        
            // build the dom elements
            var form = document.getElementById("myForm");
    
            var textarea = document.createElement("textarea");
            textarea.style.width = "500px";
            textarea.value = "Hi.";
            form.appendChild(textarea);
    
            var previewDiv = document.createElement("div");
            form.appendChild(previewDiv);
        
            /***** build the preview manager *****/
            var panes = {input:textarea, preview:previewDiv, output:null};
            var previewManager = new Attacklab.wmd.previewManager(panes);
        
            /***** build the editor and tell it to refresh the preview after commands *****/
            var editor = new Attacklab.wmd.editor(textarea,previewManager.refresh);
        
            // save everything so we can destroy it all later
            instances.push({ta:textarea, div:previewDiv, ed:editor, pm:previewManager});
        }
        
        function destroyInstance() {
            var inst = instances.pop();
        
            if (inst) {
        
                /***** destroy the editor and preview manager *****/
                inst.pm.destroy();
                inst.ed.destroy();
            
                // remove the dom elements
                inst.ta.parentNode.removeChild(inst.ta);
                inst.div.parentNode.removeChild(inst.div);
        
            }
        }
        
