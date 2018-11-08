/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let counts = {};

  function createVariety(subDomain) {
    let result = [];
    result.push(subDomain);
    while(subDomain.indexOf('.') > -1) {
      subDomain = subDomain.slice(subDomain.indexOf('.') + 1);
      result.push(subDomain);
    }
    return result;
  }

  function inspect(count_sub) {
    let count = parseInt(count_sub.split(' ')[0]);
    let subDomains = count_sub.split(' ')[1];
    subDomains = createVariety(subDomains);

    subDomains.forEach((subDomain) => {
      if (counts[subDomain] === undefined) {
        counts[subDomain] = count;
      } else {
        counts[subDomain] += count;
      }
    })
  }

  cpdomains.forEach((cpdomain) => {
    inspect(cpdomain);
  })

  let result = [];
  for (let key in counts) {
    result.push(counts[key] + ' ' + key);
  }
  return result;
};


console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));
