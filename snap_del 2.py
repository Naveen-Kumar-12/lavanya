from datetime import *
import boto3
client=boto3.client('ec2')
resp=client.describe_snapshots(OwnerIds=['647723542605'])

for snapshot in resp['Snapshots']:
    snaps=snapshot['SnapshotId']
    start_time = snapshot['StartTime']
    #print(start_time)
    delete_time = datetime.now(tz=timezone.utc) - timedelta(days=0)
    #print(delete_time)
    #print(snaps)
    if delete_time > start_time:

        print('start_time={} and delete_time={}'.format(start_time, delete_time))
        client.delete_snapshot(SnapshotId=snaps)
        print('Snapshot with Id = {} is deleted '.format(snaps))


