package net.chrisrichardson.ftgo.orderservice.infrastructure.sagaparticipants;

public class ApproveOrderCommand extends OrderCommand {

  private ApproveOrderCommand() {
  }

  public ApproveOrderCommand(long orderId) {
    super(orderId);
  }
}
