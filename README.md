# Github Action (Javascript) for Oracle Sqlcl (SQL Command Line)

With Github Action for Oracle Sqlcl, you can automate your workflow by executing SQL commands to manage Oracle Database resources inside of an Action.

# Dependencies
Oracle Sqlcl requires Java so you must setup Java before.

```yaml
- name: 'Set up latest Oracle JDK 17'
  uses: oracle-actions/setup-java@v1
  with:
    website: oracle.com
    release: 17 
```         

# Example usage
```yaml
- name: Install Oracle Sqlcl
  uses: cpruvost/setup-sqlcl@v1.0.0 

- run: |
    ./sqlcl/bin/sql -V
    exit | ./sqlcl/bin/sql ${{ secrets.DB_USER }}/${{ secrets.DB_PASSWORD }}@'${{  secrets.DB_URL }}' @./show_tables.sql  
```
Note : use the full path ./sqlcl/bin/sql because the test with an alias causes problems. I have no time to investigate for the moment.