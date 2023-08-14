import{_ as c,c as h,a as e,w as a,e as l,b as s,d as n,r as o,o as d}from"./404.md.b807bcdf.js";const ps=JSON.parse('{"title":"Attachables","description":"","frontmatter":{"title":"Attachables","category":"Documentation","tags":["beginner"],"mentions":["Sprunkles317","MedicalJewel105","AdamRaichu","Luthorius","TheItsNameless"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[{"level":3,"title":"File Structure","slug":"file-structure","link":"#file-structure","children":[]},{"level":3,"title":"Attachable Definition","slug":"attachable-definition","link":"#attachable-definition","children":[]}]},{"level":2,"title":"Method 1 - Attached to the Skeleton","slug":"method-1-attached-to-the-skeleton","link":"#method-1-attached-to-the-skeleton","children":[{"level":3,"title":"Setting up the Skeleton","slug":"setting-up-the-skeleton","link":"#setting-up-the-skeleton","children":[]},{"level":3,"title":"Display Settings","slug":"display-settings","link":"#display-settings","children":[]},{"level":3,"title":"First-person Animations","slug":"first-person-animations","link":"#first-person-animations","children":[]},{"level":3,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}]},{"level":2,"title":"Method 2 - Bound to a Bone","slug":"method-2-bound-to-a-bone","link":"#method-2-bound-to-a-bone","children":[{"level":3,"title":"Model Binding","slug":"model-binding","link":"#model-binding","children":[]},{"level":3,"title":"Display Settings","slug":"display-settings-1","link":"#display-settings-1","children":[]},{"level":3,"title":"First-person Animations","slug":"first-person-animations-1","link":"#first-person-animations-1","children":[]}]},{"level":2,"title":"Example Pack","slug":"example-pack","link":"#example-pack","children":[]}],"relativePath":"items/attachables.md"}'),u={name:"items/attachables.md"},y=l("",10),D=s("h3",{id:"attachable-definition",tabindex:"-1"},[n("Attachable Definition "),s("a",{class:"header-anchor",href:"#attachable-definition","aria-hidden":"true"},"#")],-1),F=s("p",null,"Here's a basic example of an attachable.",-1),m=l("",5),b=s("p",null,"In this first method we will construct the attachable using a copy of the player's skeleton, by attaching your model to one of the player's bones.",-1),C=s("p",null,"This solution is ideal for models that are intended for scenarios involving only one type of mob/entity, especially players; and involving only one equipment slot. It is easy to view what the model will look like in Blockbench.",-1),_=s("h3",{id:"setting-up-the-skeleton",tabindex:"-1"},[n("Setting up the Skeleton "),s("a",{class:"header-anchor",href:"#setting-up-the-skeleton","aria-hidden":"true"},"#")],-1),A=s("p",null,"We need to reconstruct the player's skeleton in order for our model to be parented to the correct bone, otherwise it will not be parented to anything and will float freely on the player.",-1),g=s("p",null,[n("With a text editor, take the bones from the provided player skeleton file and copy them to your geometry file, then set the "),s("code",null,"rightItem"),n(" bone as the parent to the cubes from your model. Save this geometry to your resource pack.")],-1),f=s("p",null,"For convenience, such a model has been prepared here. The cubes from the player's model have already been removed:",-1),k=s("h3",{id:"display-settings",tabindex:"-1"},[n("Display Settings "),s("a",{class:"header-anchor",href:"#display-settings","aria-hidden":"true"},"#")],-1),w=s("p",null,"Having your model floating at the player's feet is not ideal. Our next step is to create animations so we can properly display the model on the player.",-1),q=s("p",null,"Create two new animations, one for holding the item in first person and another for holding it in third person. Select your third-person animation, and position it however you want. Save this animation to your resource pack.",-1),v=s("p",null,"Here is an example of such an animation. This also includes a first-person animation\u2014the means of making one is detailed in the section below.",-1),T=s("h3",{id:"first-person-animations",tabindex:"-1"},[n("First-person Animations "),s("a",{class:"header-anchor",href:"#first-person-animations","aria-hidden":"true"},"#")],-1),S=s("p",null,"To more easily create first-person animations, we need to mimic how the arm is positioned in the first person.",-1),x=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"To add animation for player's hands, you need to use player's animations, not attachables animations.")],-1),B=s("p",null,"Use the following guide animation and import it into Blockbench. It applies a rotation of (95, -45, 115) and a translation of (13.5, -10, 12) to the right arm bone, perfectly mimicking how the arm is positioned in first-person.",-1),E=l("",4),P=s("p",null,"In this second method, the attachable geometry will be constructed using model binding. This allows a model to be directly attached to a bone within a mob's geometry corresponding to the slot it is equipped in. Minecraft employs model binding for its attachable items, including the trident, spyglass, bow, and shield.",-1),I=s("p",null,"While this method allows the attachable to apply more dynamically to other mobs and equipment slots, model binding also has strange quirks, which will be illustrated below. Some developers may find this method trickier to get working.",-1),j=s("h3",{id:"model-binding",tabindex:"-1"},[n("Model Binding "),s("a",{class:"header-anchor",href:"#model-binding","aria-hidden":"true"},"#")],-1),O=s("p",null,[n("Our first step is to upgrade the model file format version to "),s("code",null,'"1.16.0"'),n(" if it is not already. If the model is a legacy file, then convert it before continuing; Blockbench has a tool to do this (File \u2192 Convert Project).")],-1),M=s("p",null,"Next up is modifying the root bone of our geometry to be bound to the equipment slot the item is placed in. Take note of line 4 in this excerpt from the skeleton head geometry file:",-1),V=l("",7),N=s("h3",{id:"display-settings-1",tabindex:"-1"},[n("Display Settings "),s("a",{class:"header-anchor",href:"#display-settings-1","aria-hidden":"true"},"#")],-1),R=s("p",null,"With that done, the next step is to set up animations to display the model in first person and third person.",-1),W=s("p",null,"Create two new animations, one for holding the item in first person and another for holding it in third person.",-1),G=s("p",null,"To make creating these animations easier, please do the following:",-1),H=s("ul",null,[s("li",null,"Download the following player skeleton model. We will use this as a visual aid for positioning your model.")],-1),$=s("ul",null,[s("li",null,"With a text editor, add the bones and cubes from your model to the player skeleton model, then import the player skeleton model into Blockbench."),s("li",null,"Set your model's root bone(s) to be a child of the 'rightItem' bone in the player skeleton."),s("li",null,[n("Download the following animation file import the "),s("code",null,"wiki.third_person_guide"),n(" animation. This will be used later to make positioning easier.")])],-1),L=s("p",null,"These guide animations have one notable feature: they apply a -24 offset to the y-position of the right item bone to counteract a similar -24 y-position offset Minecraft applies to bound bones. We are unsure at this time why this happens.",-1),J=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"NOTE"),s("p",null,[n("Similar to Method One, "),s("strong",null,"two"),n(" animations will need to be played simultaneously for correct positioning.")]),s("p",null,"Be sure you are editing your animations when making your changes. Select it first, then play the guide animation on top.")],-1),z=s("p",null,"Play both animations, and position your model however you want. Save the animations to your resource pack.",-1),U=s("p",null,"An example animation file for this positioning:",-1),K=s("h3",{id:"first-person-animations-1",tabindex:"-1"},[n("First-person Animations "),s("a",{class:"header-anchor",href:"#first-person-animations-1","aria-hidden":"true"},"#")],-1),Q=s("p",null,[n("Similar to the third-person animation, look in the Attachable Guide file and import the "),s("code",null,"wiki.first_person_guide"),n(" animation into Blockbench. Play both your animation and the guide's first-person animation together, then make your changes and save the file.")],-1),X=s("h2",{id:"example-pack",tabindex:"-1"},[n("Example Pack "),s("a",{class:"header-anchor",href:"#example-pack","aria-hidden":"true"},"#")],-1),Y=s("p",null,"Each of these methods have been compiled into an example pack you may reference, for if you are getting stuck or simply want to see a working example.",-1);function Z(ss,ns,es,as,ts,os){const r=o("FolderView"),p=o("CodeHeader"),i=o("Label"),t=o("BButton");return d(),h("div",null,[y,e(r,{paths:["RP/animations/my_item.animation.json","RP/attachables/my_item.entity.json","RP/models/entity/my_item.geo.json","RP/textures/entity/my_item.png","RP/manifest.json"]},null,8,["paths"]),D,F,e(p,null,{default:a(()=>[n("RP/attachables/stick.entity.json")]),_:1}),m,e(i,{name:"Beginner",color:"blue"}),b,C,_,A,g,f,e(t,{link:"https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_one/steve_head.geo.json?raw=true",color:"blue"},{default:a(()=>[n("\u{1F4C4} Geometry File")]),_:1}),k,w,q,v,e(t,{link:"https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_one/steve_head.animation.json?raw=true",color:"blue"},{default:a(()=>[n("\u{1F4C4} Animation File")]),_:1}),T,S,x,B,e(t,{link:"https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_one/attachable_guide.animation.json?raw=true",color:"blue"},{default:a(()=>[n("\u{1F4C4} Attachable Guide File")]),_:1}),E,e(i,{name:"Intermediate",color:"orange"}),P,I,j,O,M,e(p,null,{default:a(()=>[n("RP/models/entity/skeleton_head.geo.json")]),_:1}),V,e(t,{link:"https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_two/skeleton_head.geo.json?raw=true",color:"blue"},{default:a(()=>[n("\u{1F4C4} Geometry File")]),_:1}),N,R,W,G,H,e(t,{link:"https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_two/player_skeleton.geo.json?raw=true",color:"blue"},{default:a(()=>[n("\u{1F4C4} Player Skeleton File")]),_:1}),$,e(t,{link:"https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_two/attachable_guide.animation.json?raw=true",color:"blue"},{default:a(()=>[n("\u{1F4C4} Attachable Guide File")]),_:1}),L,J,z,U,e(t,{link:"https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/method_two/skeleton_head.animation.json?raw=true",color:"blue"},{default:a(()=>[n("\u{1F4C4} Animation File")]),_:1}),K,Q,X,Y,e(t,{link:"https://github.com/Bedrock-OSS/wiki-addon/releases/download/download/attachable-example.mcpack",color:"blue"},{default:a(()=>[n("\u{1F4BE} Example Pack")]),_:1})])}const is=c(u,[["render",Z]]);export{ps as __pageData,is as default};
