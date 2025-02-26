# Decap CMS

[Decap CMS](https://decapcms.org/), formerly known as Netlify CMS, is an open source content management system that we use to edit content on the brochure site. Decap configuration options are in the `admin/config.yml` file. To develop and make changes to the CMS, or to edit content locally, first comment out the first `backend` block and then uncomment the second `backend` block that contains `proxy_url`. Then, change the branch name to the name of the branch that you are developing on.

After the changes in `admin/config.yml` are saved *and* the site is served locally, run
```
npx decap-server
```

You can then view the CMS in your browser at http://localhost:4000/admin.
