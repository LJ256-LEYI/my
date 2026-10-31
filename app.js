const SITE = {
  name: "Liangzi Jin",
  tagline: "green finance, environmental policy and corporate innovation",
  email: "lj256@duke.edu",
  bio: "A research blog about environmental policy, green finance and the difficult relationship between capital, innovation and ecological change.",
  interests: [
    "green finance",
    "environmental policy",
    "green innovation",
    "energy transition",
    "applied economics",
  ],
};

const SOURCES = {
  pbcBriefing:
    "https://wzdt.pbc.gov.cn/rmyh/2025-07/21/article_2025072110012382105.html",
  pbcResponse:
    "https://www.pbc.gov.cn/zhengwugongkai/4081330/4081344/4081419/4081727/2025080819055951914/index.html",
  pbcFintech:
    "https://www.pbc.gov.cn/en/3688110/3688175/2025080817533622474/index.html",
  liLiu:
    "https://journal.hep.com.cn/cet/EN/10.3868/s060-016-023-0005-3",
  liuWang:
    "https://www.mendeley.com/catalogue/83d78767-489f-316e-afb7-d3433729e956/",
  qiLiu:
    "http://cfejxufe.magtech.com.cn/ddcj/CN/Y2023/V0/I3/94",
  yan:
    "https://publish.cnki.net/journal/portal/tjyj/client/paper/3d5ebc8c2da7953f502c8a2c8764930a",
};

const article = {
  id: "green-finance-pilot-zones",
  title: "Can Green Finance Make Firms Greener?",
  date: "2026-10-31",
  tags: ["environmental policy", "green finance", "green innovation"],
  minutes: 16,
  html: `
    <p class="lead">
      A factory may want to install energy-efficient equipment, develop a cleaner
      production process, or replace fossil-fuel-based technology with a low-carbon
      alternative. These projects are often expensive, technically uncertain and
      slow to generate financial returns. The central question is therefore not
      only whether firms have ideas for becoming greener. It is also whether they
      can obtain the finance needed to develop, test and commercialise those ideas.
    </p>

    <p>
      This is where green finance becomes important. Green finance refers broadly
      to financial products, institutions and policies that direct capital towards
      activities with environmental benefits. These activities may include renewable
      energy, energy efficiency, pollution control, green transport, circular
      economy projects and low-carbon technological innovation.
    </p>

    <p>
      This article examines China's Green Finance Reform and Innovation Pilot Zones
      and asks a simple but important question:
      <strong>Do these pilot zones promote green innovation among firms?</strong>
    </p>

    <p class="thesis">
      <strong>Thesis.</strong> China's Green Finance Pilot Zones have generally
      promoted corporate green innovation, but their effects are neither automatic
      nor evenly distributed. The policy works through better access to suitable
      finance, greater environmental and reputational pressure, and improved
      information between green projects and financial institutions. However, the
      benefits are stronger for some firms and regions than for others.
    </p>

    <h2>What Are China's Green Finance Pilot Zones?</h2>

    <p>
      China established its first Green Finance Reform and Innovation Pilot Zones
      in 2017. The initial pilot areas covered selected regions of Zhejiang,
      Guangdong, Jiangxi, Guizhou and Xinjiang. Later, pilot zones were also
      established in Gansu.
    </p>

    <p>
      The purpose was to create regional policy laboratories. Instead of applying
      one identical model everywhere, China allowed selected regions to test
      different ways of connecting financial institutions, firms, local
      governments and environmental policy.
    </p>

    <p>
      The pilot zones encouraged experiments in green credit, green bonds, green
      funds, environmental information disclosure, green project databases,
      carbon and environmental-rights trading, financial technology and local
      incentive mechanisms. The
      <a href="${SOURCES.pbcBriefing}" target="_blank" rel="noopener">
        People's Bank of China's policy briefing
      </a>
      describes the pilot zones as a way to explore institutional, organisational,
      market and product innovation in green finance.
    </p>

    <p>
      According to a later
      <a href="${SOURCES.pbcResponse}" target="_blank" rel="noopener">
        policy response from the People's Bank of China
      </a>,
      nine pilot zones had been established across six provinces or regions since
      2017. These zones experimented with green financial products, incentive
      mechanisms, environmental information disclosure, green project databases
      and technology-enabled green finance.
    </p>

    <p>
      The pilot zones therefore represent more than a programme of subsidised
      lending. They are an attempt to reshape the relationship between financial
      decisions, corporate investment and environmental performance.
    </p>

    <h2>Why Might Green Finance Promote Green Innovation?</h2>

    <p>
      There are three main reasons why green finance may affect corporate
      innovation.
    </p>

    <h3>1. It can reduce financing constraints</h3>

    <p>
      Green innovation is often financially difficult because firms must invest
      before the benefits become visible. A company may need to spend money on
      research, engineers, testing and new equipment long before a green
      technology produces revenue.
    </p>

    <p>
      Conventional lending is often designed around predictable cash flows,
      short repayment periods and strong collateral. Green innovation is
      frequently uncertain, long-term and difficult to value. This is especially
      challenging for small and private firms.
    </p>

    <p>
      Green finance can address this problem through longer-term loans,
      specialised credit products, green bonds, guarantees and risk-sharing
      mechanisms. It can also encourage banks to consider future technological
      potential rather than relying only on existing assets.
    </p>

    <p>
      Research by
      <a href="${SOURCES.liLiu}" target="_blank" rel="noopener">
        Li Rong and Liu Luxi
      </a>
      finds that China's pilot-zone policy significantly promoted corporate green
      innovation. Their analysis identifies an increase in the proportion of
      long-term loans and an improvement in firms' debt structures as important
      mechanisms.
    </p>

    <p>
      This finding changes the way we should think about green finance. The key
      benefit may not always be a lower interest rate. A loan that lasts long
      enough for a firm to develop and commercialise a new technology may be more
      valuable than a slightly cheaper loan that must be repaid quickly.
    </p>

    <h3>2. It can increase environmental and reputational pressure</h3>

    <p>
      Green finance can also work through constraint rather than support. If banks
      begin to assess firms' environmental performance more carefully, heavily
      polluting companies may face greater difficulty obtaining finance. They may
      also experience increased media attention, investor concern and reputational
      risk.
    </p>

    <p>
      This can create a forcing mechanism. Firms may invest in green innovation
      because they want to protect their reputation, maintain access to finance
      or avoid losing existing financial relationships.
    </p>

    <p>
      A study by
      <a href="${SOURCES.qiLiu}" target="_blank" rel="noopener">
        Qi Huai-jin and Liu Si-qin
      </a>
      examines heavily polluting firms listed on the Shanghai and Shenzhen stock
      exchanges between 2014 and 2020. The authors find that the green finance
      pilot policy increased corporate green innovation activity.
    </p>

    <p>
      The study also identifies financing convenience and corporate reputation
      risk as important channels. The effect was stronger among non-state-owned
      firms, firms more dependent on external finance and firms located in areas
      with weaker environmental regulation.
    </p>

    <h3>3. It can reduce information asymmetry</h3>

    <p>
      Financial institutions often lack reliable information about green projects.
      A bank may not know whether a proposed energy-saving technology is genuinely
      effective, whether environmental claims are credible or whether a project
      can generate sufficient revenue to repay a loan.
    </p>

    <p>
      Firms may also lack information about which financial products are available
      and how to demonstrate that their projects qualify as green.
    </p>

    <p>
      Pilot zones attempt to reduce this information gap through environmental
      information platforms, green project databases, standardised evaluation
      criteria, data-sharing mechanisms and digital tools for monitoring green
      loans.
    </p>

    <p>
      The
      <a href="${SOURCES.pbcFintech}" target="_blank" rel="noopener">
        People's Bank of China has described the use of big-data platforms in
        pilot areas such as Huzhou
      </a>.
      These platforms connect green projects with financial institutions and
      support the monitoring of green loans.
    </p>

    ${flowchart()}

    <h2>What Does the Evidence Show?</h2>

    <p>
      The available empirical research provides reasonably strong evidence that
      the pilot zones increased corporate green innovation. However, the evidence
      also shows that the effect depends on the type of firm, the quality of local
      institutions and the way innovation is measured.
    </p>

    <h3>Green patent applications increased</h3>

    <p>
      <a href="${SOURCES.liuWang}" target="_blank" rel="noopener">
        Liu and Wang
      </a>
      examine the establishment of the pilot zones as a quasi-natural experiment.
      Using firm-level data from 2013 to 2020, they find a positive relationship
      between the establishment of the pilot zones and green patent applications.
    </p>

    <p>
      The authors also find that the policy worked partly through greater research
      and development investment and firms' sustainable development objectives.
      Their results remained valid after robustness checks including
      parallel-trend tests, placebo tests and propensity-score matching.
    </p>

    <p>
      This suggests that the positive relationship was not simply the result of
      firms in already green regions applying for more patents. The policy appears
      to have changed innovation activity after the pilot zones were established.
    </p>

    <h3>Green finance may improve the structure of finance</h3>

    <p>
      Li and Liu reach a similar overall conclusion. Using green patent data from
      Chinese A-share listed companies between 2012 and 2019, they find that the
      pilot policy significantly promoted corporate green innovation.
    </p>

    <p>
      Their mechanism analysis is particularly useful. The policy appears to have
      increased the proportion of long-term loans and improved firms' debt
      structures. This challenges the simple assumption that green finance works
      primarily by making borrowing cheaper.
    </p>

    <p>
      For many green projects, the length and stability of finance may be more
      important than the interest rate. An energy-saving production system may
      need several years before it generates sufficient savings. A short-term
      loan may create repayment pressure before the technology is ready.
    </p>

    <h3>Environmental pressure can stimulate innovation</h3>

    <p>
      Research focused on heavily polluting firms provides additional evidence.
      Qi and Liu find that the green finance pilot policy increased green
      innovation activity among such firms. The effect was stronger for firms
      with higher pollution intensity.
    </p>

    <p>
      This result is consistent with the Porter Hypothesis: well-designed
      environmental policies can encourage firms to innovate rather than merely
      impose costs. If green finance makes environmentally harmful production more
      financially difficult while creating opportunities for cleaner investment,
      firms may respond by developing new technologies.
    </p>

    <p>
      A 2024 study published in <em>Statistical Research</em> uses a
      triple-difference model to examine manufacturing firms. The study reports
      that the pilot policy significantly increased green innovation among
      polluting firms in pilot areas. The effect was mainly reflected in green
      invention patents.
    </p>

    <p>
      The authors argue that the policy created both external pressure and
      internal incentives. It increased financing constraints and public
      scrutiny, while also encouraging firms to allocate more money and personnel
      to green innovation.
    </p>

    ${evidenceTable()}

    <h2>Why Does the Policy Not Work Equally Well Everywhere?</h2>

    <h3>Listed firms are not the whole economy</h3>

    <p>
      Much of the empirical literature uses listed companies because their
      financial, patent and environmental data are more accessible. Listed
      companies are usually larger, more formalised and better connected to
      financial markets than small and medium-sized enterprises.
    </p>

    <p>
      This means that the research provides strong evidence that the pilot zones
      affected the observed firms. It does not necessarily prove that all firms
      in the pilot zones benefited equally.
    </p>

    <p>
      Small firms may face limited collateral, weak environmental reporting
      capacity, insufficient knowledge of green financial products, higher
      perceived technological risk and greater administrative costs of
      certification.
    </p>

    <p>
      A large firm may employ specialists who can prepare a green bond application
      or calculate the environmental benefits of a new technology. A small
      factory may have a promising energy-saving project but lack the personnel
      and data required to demonstrate that the project qualifies for green
      finance.
    </p>

    <h3>Patents do not automatically mean environmental improvement</h3>

    <p>
      Green patent data are valuable, but they have limitations. A patent may
      never be used commercially, may generate limited environmental benefits or
      may be pursued partly to obtain policy recognition.
    </p>

    <p>
      For this reason, policy evaluation should also examine energy use per unit
      of output, carbon emissions, pollutant emissions, technology
      commercialisation, patent citations, green product sales and energy
      efficiency.
    </p>

    <p>
      The existing evidence is strongest on innovation inputs and outputs. It is
      less conclusive regarding the long-term environmental consequences of those
      innovations.
    </p>

    <h3>Green finance may favour firms that are already capable</h3>

    <p>
      Large enterprises and state-owned enterprises often have better access to
      collateral, more stable cash flows, stronger information-disclosure
      systems, greater experience with government programmes and more resources
      for technological experimentation.
    </p>

    <p>
      This creates a risk of a Matthew effect in green finance: firms that are
      already better positioned to undertake green innovation receive more
      financial support, while firms with the greatest financing constraints
      remain excluded.
    </p>

    ${heterogeneityFigure()}

    <h2>Policy Recommendations</h2>

    <h3>1. Measure environmental outcomes, not only financial volume</h3>

    <p>
      A large green loan balance does not necessarily indicate a successful
      environmental policy. Policymakers should evaluate whether green finance
      produces lower energy consumption, lower carbon intensity, reduced
      pollution, greater technology commercialisation and measurable changes in
      production processes.
    </p>

    <h3>2. Improve access for smaller and private firms</h3>

    <p>
      Pilot zones should develop financial products suitable for firms that lack
      substantial collateral or advanced reporting systems. Possible measures
      include green credit guarantees, public risk-sharing schemes,
      environmental-data-based credit assessments, supply-chain green finance,
      technical assistance and longer repayment periods for energy-efficiency
      investments.
    </p>

    <h3>3. Combine green finance with environmental regulation</h3>

    <p>
      Green finance cannot replace environmental regulation. If pollution remains
      inexpensive and environmental enforcement is weak, firms may have little
      reason to make substantial changes.
    </p>

    <p>
      The strongest policy mix combines finance with emissions standards,
      pollution permits, carbon markets, environmental disclosure,
      energy-efficiency requirements, environmental taxation and credible
      enforcement.
    </p>

    <h3>4. Evaluate the policy over a longer period</h3>

    <p>
      Green innovation is usually a long-term process. A firm may need years to
      transform a patent into a commercially viable technology and even longer
      to generate measurable reductions in emissions.
    </p>

    ${timeline()}

    <h2>Conclusion: Green Finance Works, but It Is Not a Magic Solution</h2>

    <p>
      Do China's Green Finance Pilot Zones promote green innovation among firms?
      The available evidence suggests that they do, but with important
      qualifications.
    </p>

    <p>
      First, the pilot zones appear to have increased corporate green innovation.
      Studies using difference-in-differences and triple-difference methods
      generally find positive effects on green patent applications, green
      invention patents and research-related activity.
    </p>

    <p>
      Second, the mechanisms are more complex than the idea that governments
      simply provide firms with cheaper loans. Green finance can improve access
      to longer-term finance, change firms' debt structures, reduce information
      asymmetry and connect green projects with financial institutions. At the
      same time, environmental disclosure and financial screening can increase
      reputational and financing pressure on polluting firms.
    </p>

    <p>
      Third, the effects are uneven. Large firms, state-owned enterprises and
      firms with stronger innovation capacity may be better positioned to benefit
      from green financial products. Small and private firms may face
      difficulties accessing finance even when they have significant potential
      for green transformation.
    </p>

    <p>
      The most important lesson is that green finance should not be judged by how
      much money is labelled "green". It should be judged by whether financial
      institutions help firms develop technologies that are cleaner,
      commercially viable and environmentally effective.
    </p>

    <p>
      China's pilot zones have demonstrated that financial institutions can
      influence corporate innovation. Their next challenge is to ensure that
      green finance reaches more firms, especially small and private enterprises,
      and that financial support produces measurable improvements in energy use,
      pollution control and carbon emissions.
    </p>

    <p>
      Green finance is therefore best understood as an enabling policy. It can
      provide resources and incentives for firms to innovate, but it cannot work
      alone. Its success depends on reliable environmental information, credible
      regulation, suitable financial products, local institutional capacity and
      long-term evaluation.
    </p>

    <p class="closing-line">
      The question is no longer simply whether finance can become green. The more
      important question is whether green finance can make the wider economy
      genuinely greener.
    </p>

    <h2>References</h2>

    <ol class="references">
      <li>
        People’s Bank of China. (2017).
        <em>Green Finance Reform and Innovation Pilot Zones: Policy Briefing</em>.
        Chinese title: 绿色金融改革创新试验区吹风会.
        <a href="${SOURCES.pbcBriefing}" target="_blank" rel="noopener">Source</a>.
      </li>
      <li>
        People’s Bank of China. (2023).
        <em>Response to Recommendation No. 5798 of the Fifth Session of the
        13th National People’s Congress</em>.
        Chinese title: 中国人民银行对十三届全国人大五次会议第5798号建议的答复.
        <a href="${SOURCES.pbcResponse}" target="_blank" rel="noopener">Source</a>.
      </li>
      <li>
        Li, R., &amp; Liu, L. (2023). Green finance and green innovation of
        enterprises. <em>China Economic Transition, 6</em>(1), 119–144.
        <a href="${SOURCES.liLiu}" target="_blank" rel="noopener">Source</a>.
      </li>
      <li>
        Liu, S., &amp; Wang, Y. (2023). Green innovation effect of pilot zones
        for green finance reform: Evidence of quasi-natural experiment.
        <em>Technological Forecasting and Social Change, 186</em>, 122079.
        <a href="${SOURCES.liuWang}" target="_blank" rel="noopener">Source</a>.
      </li>
      <li>
        Qi, H., &amp; Liu, S. (2023). Does green financial policy promote
        corporate green innovations? Evidence from the Green Financial Reform
        and Innovation Pilot Zones. <em>Contemporary Finance &amp; Economics</em>,
        3, 94–105.
        Chinese title: 绿色金融政策促进企业绿色创新吗——来自绿色金融改革创新试验区的证据.
        <a href="${SOURCES.qiLiu}" target="_blank" rel="noopener">Source</a>.
      </li>
      <li>
        Yan, L. et al. (2024). Can green finance pilot policies force polluting
        firms to undertake green innovation? Evidence from the Green Finance
        Reform and Innovation Pilot Zones. <em>Statistical Research</em>.
        Chinese title: 绿色金融试点政策能否倒逼污染企业绿色创新？——基于绿色金融改革创新试验区的经验证据.
        <a href="${SOURCES.yan}" target="_blank" rel="noopener">Source</a>.
      </li>
    </ol>
  `,
};

function flowchart() {
  return `
    <figure class="visual">
      <figcaption>
        Figure 1. How Green Finance Pilot Zones May Affect Corporate Green Innovation
      </figcaption>
      <div class="flowchart">
        <div class="flow-node primary">Green Finance Pilot Zone</div>
        <div class="arrow">↓</div>
        <div class="flow-grid">
          <div class="flow-node">Green credit and longer-term loans</div>
          <div class="flow-node">Environmental information and project databases</div>
          <div class="flow-node">Government incentives and local institutions</div>
        </div>
        <div class="arrow">↓</div>
        <div class="flow-node secondary">Changes in corporate conditions</div>
        <div class="arrow">↓</div>
        <div class="flow-grid">
          <div class="flow-node">Better access to suitable finance</div>
          <div class="flow-node">Greater environmental and reputational pressure</div>
          <div class="flow-node">Lower information asymmetry</div>
        </div>
        <div class="arrow">↓</div>
        <div class="flow-node highlight">
          More resources and incentives for green R&amp;D
        </div>
        <div class="arrow">↓</div>
        <div class="flow-grid">
          <div class="flow-node">More green patents</div>
          <div class="flow-node">Cleaner technologies</div>
          <div class="flow-node">Potential long-term environmental benefits</div>
        </div>
      </div>
      <p class="visual-source">
        Source: Author’s own figure, based on the policy framework of the People’s
        Bank of China and the mechanisms identified by Li and Liu (2023) and Qi
        and Liu (2023).
      </p>
    </figure>
  `;
}

function evidenceTable() {
  return `
    <figure class="visual">
      <figcaption>
        Table 1. What Existing Studies Tell Us about the Pilot Zones
      </figcaption>
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Study</th>
              <th>Data and method</th>
              <th>Main finding</th>
              <th>Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Liu and Wang, 2023</td>
              <td>A-share firms, 2013–2020; DID</td>
              <td>Pilot zones increased green patent applications.</td>
              <td>Effects operated partly through R&amp;D investment and sustainability objectives.</td>
            </tr>
            <tr>
              <td>Li and Liu, 2023</td>
              <td>A-share firms, 2012–2019; DID</td>
              <td>Pilot zones significantly promoted green innovation.</td>
              <td>Longer-term loans and improved debt structure were important mechanisms.</td>
            </tr>
            <tr>
              <td>Qi and Liu, 2023</td>
              <td>Heavily polluting firms, 2014–2020; DID</td>
              <td>Policy increased green innovation activity.</td>
              <td>Effects were stronger for pollution-intensive and externally financed firms.</td>
            </tr>
            <tr>
              <td>Yan et al., 2024</td>
              <td>Manufacturing firms; triple difference</td>
              <td>Policy increased innovation among polluting firms in pilot areas.</td>
              <td>Main effect was reflected in green invention patents.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="visual-source">
        Source: Author’s synthesis based on the studies listed in the References section.
      </p>
    </figure>
  `;
}

function heterogeneityFigure() {
  return `
    <figure class="visual">
      <figcaption>
        Figure 2. Why the Effects of Green Finance May Differ Across Firms
      </figcaption>
      <div class="matrix">
        <span class="matrix-y">Potential policy effect</span>
        <div class="matrix-area">
          <span class="point p1">Large state-owned firms</span>
          <span class="point p2">Large private firms</span>
          <span class="point p3">Highly polluting firms</span>
          <span class="point p4">Small private firms</span>
          <span class="point p5">Firms in weak financial systems</span>
          <span class="matrix-x">Capacity to access finance and conduct R&amp;D →</span>
        </div>
      </div>
      <p class="visual-source">
        Source: Author’s conceptual figure based on heterogeneous effects reported
        by Li and Liu (2023) and Qi and Liu (2023). This figure does not present a
        direct statistical estimate.
      </p>
    </figure>
  `;
}

function timeline() {
  return `
    <figure class="visual">
      <figcaption>
        Figure 3. The Policy Chain from Green Finance to Environmental Improvement
      </figcaption>
      <div class="timeline">
        <div class="timeline-step">
          <strong>1. Financial input</strong>
          <span>Green loans, bonds, guarantees and funds</span>
        </div>
        <div class="timeline-line"></div>
        <div class="timeline-step">
          <strong>2. Corporate response</strong>
          <span>More R&amp;D, cleaner equipment and technical staff</span>
        </div>
        <div class="timeline-line"></div>
        <div class="timeline-step">
          <strong>3. Innovation output</strong>
          <span>Green patents, new processes and commercial technologies</span>
        </div>
        <div class="timeline-line"></div>
        <div class="timeline-step final">
          <strong>4. Environmental outcome</strong>
          <span>Lower energy use, lower emissions and reduced pollution</span>
        </div>
      </div>
      <p class="visual-source">
        Source: Author’s own analytical figure.
      </p>
    </figure>
  `;
}

const posts = [article];
let searchTerm = "";
let filterTag = null;

const allTags = [
  ...new Set(posts.flatMap((post) => post.tags)),
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(date) {
  const value = new Date(`${date}T00:00:00`);
  return value.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function shortDate(date) {
  const value = new Date(`${date}T00:00:00`);
  return value.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function wordCount(post) {
  return post.html
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function injectStyles() {
  if (document.getElementById("green-finance-styles")) return;

  const style = document.createElement("style");
  style.id = "green-finance-styles";
  style.textContent = `
    :root {
      --paper: #f8f7f2;
      --paper-alt: #eeeee8;
      --ink: #242822;
      --muted: #6f756c;
      --line: #d7d9cf;
      --accent: #3f765b;
      --accent-dark: #28533d;
      --warm: #ad712b;
      --shadow: 0 14px 40px rgba(37, 45, 34, .08);
    }

    [data-theme="dark"] {
      --paper: #20251f;
      --paper-alt: #2b322b;
      --ink: #e8eee5;
      --muted: #abb7a8;
      --line: #424c42;
      --accent: #8ec39b;
      --accent-dark: #b1d9b8;
      --warm: #e3aa62;
      --shadow: 0 14px 40px rgba(0, 0, 0, .22);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: var(--paper);
      color: var(--ink);
      font-family: Georgia, "Times New Roman", serif;
      line-height: 1.72;
    }

    a {
      color: var(--accent-dark);
      text-decoration-thickness: 1px;
      text-underline-offset: 3px;
    }

    [data-theme="dark"] a {
      color: var(--accent);
    }

    button,
    input {
      font: inherit;
    }

    .site-shell {
      width: min(1120px, calc(100% - 40px));
      margin: 0 auto;
    }

    .site-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 34px 0 30px;
      border-bottom: 1px solid var(--line);
    }

    .site-brand {
      text-decoration: none;
      color: var(--ink);
    }

    .site-name {
      display: block;
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: .02em;
    }

    .site-tagline {
      display: block;
      margin-top: 3px;
      color: var(--muted);
      font-size: .85rem;
    }

    .site-nav {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .site-nav a {
      color: var(--muted);
      font-size: .9rem;
      text-decoration: none;
    }

    .site-nav a.active,
    .site-nav a:hover {
      color: var(--ink);
    }

    .icon-button {
      width: 36px;
      height: 36px;
      border: 1px solid var(--line);
      border-radius: 50%;
      background: transparent;
      color: var(--ink);
      cursor: pointer;
    }

    main {
      min-height: 70vh;
      padding: 60px 0 90px;
    }

    .list,
    .about,
    .post {
      max-width: 820px;
      margin: 0 auto;
    }

    .list-stats {
      margin: 0 0 24px;
      color: var(--muted);
      font-size: .9rem;
    }

    .search {
      width: 100%;
      padding: 12px 14px;
      border: 1px solid var(--line);
      border-radius: 4px;
      background: transparent;
      color: var(--ink);
      outline: none;
    }

    .search:focus {
      border-color: var(--accent);
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 18px 0 30px;
    }

    .chip {
      padding: 5px 10px;
      border: 1px solid var(--line);
      border-radius: 20px;
      background: transparent;
      color: var(--muted);
      cursor: pointer;
      font-size: .82rem;
    }

    .chip.active {
      border-color: var(--accent);
      background: var(--accent);
      color: white;
    }

    .post-list {
      border-top: 1px solid var(--line);
    }

    .post-row {
      display: grid;
      grid-template-columns: 125px 1fr auto;
      gap: 20px;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px solid var(--line);
      color: var(--ink);
      text-decoration: none;
    }

    .post-row:hover .post-title {
      color: var(--accent-dark);
    }

    .post-date,
    .post-tags {
      color: var(--muted);
      font-size: .82rem;
    }

    .post-title {
      font-size: 1.12rem;
    }

    .post-tags i {
      display: inline-block;
      margin-left: 5px;
      padding: 2px 6px;
      border: 1px solid var(--line);
      border-radius: 3px;
      font-style: normal;
      font-size: .72rem;
    }

    .post-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 25px;
    }

    .back {
      color: var(--muted);
      text-decoration: none;
      font-size: .9rem;
    }

    .post-title-lg {
      max-width: 760px;
      margin: 0;
      font-size: clamp(2.25rem, 5vw, 4.2rem);
      line-height: 1.08;
      letter-spacing: -.02em;
    }

    .post-sub {
      margin: 17px 0 45px;
      color: var(--muted);
      font-size: .9rem;
    }

    .post-body {
      font-size: 1.08rem;
    }

    .post-body h2 {
      margin: 3.2em 0 .75em;
      font-size: 1.85rem;
      line-height: 1.2;
    }

    .post-body h3 {
      margin: 2.3em 0 .65em;
      font-size: 1.3rem;
      line-height: 1.3;
    }

    .post-body p {
      margin: 0 0 1.25em;
    }

    .lead {
      font-size: 1.28rem;
      line-height: 1.68;
    }

    .thesis {
      padding: 18px 20px;
      border-left: 4px solid var(--accent);
      background: var(--paper-alt);
    }

    .closing-line {
      margin-top: 2.5rem !important;
      font-size: 1.2rem;
      font-weight: 700;
    }

    .visual {
      margin: 48px 0;
      padding: 24px 0;
    }

    .visual figcaption {
      margin-bottom: 20px;
      font-weight: 700;
      line-height: 1.4;
    }

    .visual-source {
      margin-top: 16px !important;
      color: var(--muted);
      font-size: .82rem;
      line-height: 1.5;
    }

    .flowchart {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .flow-node {
      width: min(100%, 340px);
      padding: 13px 15px;
      border: 1px solid var(--line);
      background: var(--paper-alt);
      text-align: center;
      line-height: 1.4;
    }

    .flow-node.primary {
      border-color: var(--accent);
      background: var(--accent);
      color: white;
      font-weight: 700;
    }

    .flow-node.secondary {
      border-color: var(--accent);
      font-weight: 700;
    }

    .flow-node.highlight {
      border-color: var(--warm);
      background: rgba(173, 113, 43, .13);
      font-weight: 700;
    }

    .flow-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      gap: 10px;
    }

    .flow-grid .flow-node {
      width: auto;
      font-size: .9rem;
    }

    .arrow {
      color: var(--accent);
      font-size: 1.35rem;
    }

    .table-scroll {
      overflow-x: auto;
    }

    table {
      width: 100%;
      min-width: 720px;
      border-collapse: collapse;
      font-size: .88rem;
      line-height: 1.45;
    }

    th,
    td {
      padding: 11px;
      border: 1px solid var(--line);
      text-align: left;
      vertical-align: top;
    }

    th {
      background: var(--paper-alt);
    }

    .matrix {
      display: flex;
      min-height: 380px;
      gap: 15px;
    }

    .matrix-y {
      display: flex;
      align-items: center;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      color: var(--muted);
      font-size: .8rem;
    }

    .matrix-area {
      position: relative;
      flex: 1;
      min-height: 350px;
      border-left: 1px solid var(--ink);
      border-bottom: 1px solid var(--ink);
      background:
        linear-gradient(to right, transparent 49.7%, var(--line) 50%, transparent 50.3%),
        linear-gradient(to bottom, transparent 49.7%, var(--line) 50%, transparent 50.3%);
    }

    .point {
      position: absolute;
      max-width: 155px;
      padding: 7px 9px;
      border: 1px solid var(--accent);
      background: var(--paper);
      font-size: .76rem;
      line-height: 1.3;
    }

    .p1 { top: 8%; right: 7%; }
    .p2 { top: 24%; right: 27%; }
    .p3 { top: 42%; left: 46%; }
    .p4 { bottom: 14%; left: 10%; }
    .p5 { bottom: 5%; left: 46%; }

    .matrix-x {
      position: absolute;
      bottom: -38px;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);
      text-align: center;
      color: var(--muted);
      font-size: .8rem;
    }

    .timeline {
      display: flex;
      align-items: stretch;
    }

    .timeline-step {
      flex: 1;
      min-height: 135px;
      padding: 15px;
      border: 1px solid var(--line);
      background: var(--paper-alt);
    }

    .timeline-step strong {
      display: block;
      margin-bottom: 10px;
      color: var(--accent-dark);
    }

    .timeline-step span {
      display: block;
      font-size: .86rem;
      line-height: 1.45;
    }

    .timeline-step.final {
      background: rgba(63, 118, 91, .14);
    }

    .timeline-line {
      width: 28px;
      min-width: 28px;
      height: 2px;
      align-self: center;
      background: var(--accent);
    }

    .references {
      padding-left: 23px;
      font-size: .94rem;
    }

    .references li {
      margin-bottom: 13px;
      line-height: 1.55;
    }

    .about-avatar {
      display: grid;
      width: 64px;
      height: 64px;
      place-items: center;
      margin-bottom: 25px;
      border-radius: 50%;
      background: var(--accent);
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
    }

    .about-title {
      font-size: 3rem;
      line-height: 1.1;
    }

    .about-interests {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 25px 0;
    }

    .interest {
      padding: 5px 9px;
      border: 1px solid var(--line);
      color: var(--muted);
      font-size: .85rem;
    }

    .about-links {
      display: flex;
      gap: 18px;
    }

    .site-footer {
      padding: 30px 0 45px;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: .85rem;
    }

    .footer-links {
      display: flex;
      gap: 17px;
      margin-top: 8px;
    }

    #to-top {
      position: fixed;
      right: 22px;
      bottom: 22px;
      display: none;
    }

    #to-top.show {
      display: block;
    }

    @media (max-width: 700px) {
      .site-shell {
        width: min(100% - 28px, 820px);
      }

      .site-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .site-nav {
        width: 100%;
        justify-content: space-between;
      }

      main {
        padding-top: 40px;
      }

      .post-row {
        grid-template-columns: 1fr;
        gap: 5px;
      }

      .post-tags {
        order: 3;
      }

      .flow-grid {
        grid-template-columns: 1fr;
      }

      .timeline {
        flex-direction: column;
      }

      .timeline-line {
        width: 2px;
        min-width: 2px;
        height: 20px;
        align-self: center;
      }

      .matrix {
        min-height: 420px;
      }

      .matrix-area {
        min-height: 390px;
      }
    }
  `;

  document.head.appendChild(style);
}

function shell(content) {
  return `
    <div class="site-shell">
      <header class="site-header">
        <a class="site-brand" href="#/">
          <span class="site-name">${SITE.name}</span>
          <span class="site-tagline">${SITE.tagline}</span>
        </a>
        <nav class="site-nav" aria-label="Main navigation">
          <a href="#/">Writing</a>
          <a href="#/about">About</a>
          <button id="theme-toggle" class="icon-button" type="button" title="Toggle colour theme">
            ◐
          </button>
        </nav>
      </header>
      <main id="main-content">${content}</main>
      <footer class="site-footer">
        <div>© ${new Date().getFullYear()} ${SITE.name}</div>
        <div class="footer-links">
          <a href="mailto:${SITE.email}">Email</a>
        </div>
      </footer>
      <button id="to-top" class="icon-button" type="button" title="Back to top">↑</button>
    </div>
  `;
}

function renderList() {
  const query = searchTerm.trim().toLowerCase();

  const visible = posts.filter((post) => {
    const matchesTag = !filterTag || post.tags.includes(filterTag);
    const haystack = `${post.title} ${post.tags.join(" ")} ${post.html}`.toLowerCase();
    return matchesTag && (!query || haystack.includes(query));
  });

  const rows = visible.length
    ? visible
        .map(
          (post) => `
            <a class="post-row" href="#/post/${post.id}">
              <time class="post-date">${shortDate(post.date)}</time>
              <span class="post-title">${post.title}</span>
              <span class="post-tags">
                ${post.tags.map((tag) => `<i>${tag}</i>`).join("")}
              </span>
            </a>
          `
        )
        .join("")
    : `<p>Nothing matches. Try another search term.</p>`;

  return `
    <section class="list">
      <p class="list-stats">
        ${posts.length} article · ${wordCount(posts[0])} words · ${allTags.length} topics
      </p>
      <input
        class="search"
        type="search"
        placeholder="Search this blog"
        value="${escapeHtml(searchTerm)}"
        aria-label="Search articles"
      />
      <div class="chips">
        <button class="chip ${!filterTag ? "active" : ""}" data-tag="all">All</button>
        ${allTags
          .map(
            (tag) => `
              <button class="chip ${filterTag === tag ? "active" : ""}" data-tag="${tag}">
                ${tag}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="post-list">${rows}</div>
    </section>
  `;
}

function renderPost(post) {
  return `
    <article class="post">
      <div class="post-meta">
        <a class="back" href="#/">← Back to writing</a>
        <span class="post-tags">
          ${post.tags.map((tag) => `<i>${tag}</i>`).join("")}
        </span>
      </div>
      <h1 class="post-title-lg">${post.title}</h1>
      <p class="post-sub">
        ${formatDate(post.date)} · ${post.minutes} min read · Environmental policy analysis
      </p>
      <div class="post-body">${post.html}</div>
    </article>
  `;
}

function renderAbout() {
  return `
    <section class="about">
      <div class="about-avatar">LJ</div>
      <h1 class="about-title">About</h1>
      <p>
        I am a graduate student in International Environmental Policy at Duke
        Kunshan University.
      </p>
      <p>${SITE.bio}</p>
      <div class="about-interests">
        ${SITE.interests.map((interest) => `<span class="interest">${interest}</span>`).join("")}
      </div>
      <div class="about-links">
        <a href="mailto:${SITE.email}">Email</a>
      </div>
    </section>
  `;
}

function renderNotFound() {
  return `
    <section class="about">
      <h1 class="about-title">Page not found</h1>
      <p>
        This page does not exist.
        <a href="#/">Return to the writing page</a>.
      </p>
    </section>
  `;
}

function applyTheme() {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  let theme = null;

  try {
    theme = localStorage.getItem("theme");
  } catch (error) {
    theme = null;
  }

  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  document.documentElement.setAttribute("data-theme", theme);
  button.textContent = theme === "dark" ? "☀" : "☾";

  button.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";

    document.documentElement.setAttribute("data-theme", next);
    button.textContent = next === "dark" ? "☀" : "☾";

    try {
      localStorage.setItem("theme", next);
    } catch (error) {
      // Theme preference is optional if storage is unavailable.
    }
  });
}

function bindSearch() {
  const search = document.querySelector(".search");

  if (search) {
    search.addEventListener("input", (event) => {
      searchTerm = event.target.value;
      render();
      const nextSearch = document.querySelector(".search");
      if (nextSearch) {
        nextSearch.focus();
        nextSearch.setSelectionRange(searchTerm.length, searchTerm.length);
      }
    });
  }

  document.querySelectorAll(".chip").forEach((button) => {
    button.addEventListener("click", () => {
      filterTag = button.dataset.tag === "all" ? null : button.dataset.tag;
      render();
    });
  });
}

function bindScrollButton() {
  const button = document.getElementById("to-top");
  if (!button) return;

  window.addEventListener(
    "scroll",
    () => {
      button.classList.toggle("show", window.scrollY > 450);
    },
    { passive: true }
  );

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function render() {
  const app = document.getElementById("app");
  if (!app) return;

  const hash = window.location.hash || "#/";
  let content = "";
  let title = `${SITE.name} · ${SITE.tagline}`;

  if (hash === "#/" || hash === "#") {
    content = renderList();
  } else if (hash === "#/about") {
    content = renderAbout();
    title = `About · ${SITE.name}`;
  } else if (hash.startsWith("#/post/")) {
    const id = hash.slice("#/post/".length);
    const post = posts.find((item) => item.id === id);

    if (post) {
      content = renderPost(post);
      title = `${post.title} · ${SITE.name}`;
    } else {
      content = renderNotFound();
      title = `Page not found · ${SITE.name}`;
    }
  } else {
    content = renderNotFound();
    title = `Page not found · ${SITE.name}`;
  }

  app.innerHTML = shell(content);
  document.title = title;

  applyTheme();
  bindSearch();
  bindScrollButton();
  window.scrollTo(0, 0);
}

injectStyles();
window.addEventListener("hashchange", render);
render();