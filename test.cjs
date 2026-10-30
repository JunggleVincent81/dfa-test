const assert=require('node:assert/strict');const {run,validate,presets}=require('./engine.js');let count=0;
function strings(n){let a=[''];for(let i=1;i<=n;i++)for(let j=0;j<2**i;j++)a.push(j.toString(2).padStart(i,'0'));return a;}
const rules=[s=>s.endsWith('1'),s=>[...s].filter(c=>c==='0').length%2===0,s=>s.includes('01'),s=>!s.includes('11')];
for(let i=0;i<4;i++){assert.deepEqual(validate(presets[i]),[]);for(const s of strings(8)){assert.equal(run(presets[i],s).kind,rules[i](s)?'accepted':'rejected');count++;}}
assert.equal(run(presets[0],'102').kind,'invalid');assert.equal(run(presets[0],'102').position,3);assert.equal(run(presets[0],' 1').position,1);
const m=structuredClone(presets[0]);delete m.transitions.q0['0'];assert.ok(validate(m).length);assert.equal(run(m,'1').kind,'config');
const uni={states:['awal','akhir'],alphabet:['😊'],start:'awal',accept:['akhir'],transitions:{awal:{'😊':'akhir'},akhir:{'😊':'akhir'}}};assert.equal(run(uni,'😊').kind,'accepted');assert.equal(run(uni,'').kind,'rejected');
const noFinal=structuredClone(presets[0]);noFinal.accept=[];assert.equal(run(noFinal,'111').kind,'rejected');assert.ok(validate({...m,states:['q0','q0']}).length);assert.ok(validate({}).length);
console.log(`PASS: ${count} pengujian string + validasi, Unicode, input invalid, epsilon, dan F kosong.`);
